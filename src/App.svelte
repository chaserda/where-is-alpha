<script>
  import { onMount, onDestroy } from 'svelte';
  import { fetchISSData } from './lib/iss.js';
  import Header from './components/Header.svelte';
  import TelemetryPanel from './components/TelemetryPanel.svelte';
  import OrbitPanel from './components/OrbitPanel.svelte';
  import ControlsPanel from './components/ControlsPanel.svelte';
  import Corners from './components/Corners.svelte';
  import Ticker from './components/Ticker.svelte';

  /** @type {HTMLDivElement} */
  let container;
  /** @type {any} */
  let globe;

  const MAX_HISTORY = 50;
  const POLL_INTERVAL = 5000;
  const INITIAL_VIEW_LAT_OFFSET = 10;
  const INITIAL_VIEW_LNG_OFFSET = -22;
  const INITIAL_VIEW_ALTITUDE = 1.3;

  /** @type {number | undefined} */
  let fetchInterval;
  /** @type {number | undefined} */
  let countdownInterval;
  /** @type {number | undefined} */
  let clockInterval;

  let boostPulsesRemaining = 3;
  let hasInitialFraming = false;
  let isConnected = false;
  let showPath = true;

  /** @type {number | null} */
  let currentLat = null;
  /** @type {number | null} */
  let currentLng = null;
  /** @type {number | null} */
  let currentAltKm = null;
  /** @type {number | null} */
  let currentVelocityKmh = null;
  /** @type {string | null} */
  let currentVisibility = null;
  /** @type {number | null} */
  let currentFootprintKm = null;

  /** @type {Array<{lat: number, lng: number, alt: number}>} */
  let history = [];

  let countdownSeconds = POLL_INTERVAL / 1000;
  let countdownPct = 100;
  let utcClock = '--:--:-- UTC';
  let lastFetchMs = Date.now();

  function centerIssView() {
    if (!globe || currentLat === null || currentLng === null) {
      return;
    }

    const isMobile = window.innerWidth <= 900;
    globe.pointOfView(
      {
        lat: currentLat + (isMobile ? 0 : INITIAL_VIEW_LAT_OFFSET),
        lng: currentLng + (isMobile ? 0 : INITIAL_VIEW_LNG_OFFSET),
        altitude: isMobile ? 2.2 : INITIAL_VIEW_ALTITUDE
      },
      1000
    );
  }

  function updateArcs() {
    if (!globe || !showPath) {
      return;
    }

    const arcs = history.slice(1).map((p, i) => ({
      startLat: history[i].lat,
      startLng: history[i].lng,
      endLat: p.lat,
      endLng: p.lng
    }));

    globe.arcsData(arcs);
  }

  function togglePath() {
    showPath = !showPath;
    if (!showPath) {
      globe?.arcsData([]);
      return;
    }
    updateArcs();
  }

  function clearPath() {
    history = history.slice(-1);
    if (showPath) {
      updateArcs();
    } else {
      globe?.arcsData([]);
    }
  }

  function resetView() {
    globe?.pointOfView({ lat: 20, lng: 0, altitude: 3 }, 1000);
  }

  function updateClock() {
    const now = new Date();
    const h = String(now.getUTCHours()).padStart(2, '0');
    const m = String(now.getUTCMinutes()).padStart(2, '0');
    const s = String(now.getUTCSeconds()).padStart(2, '0');
    utcClock = `${h}:${m}:${s} UTC`;
  }

  async function fetchISS() {
    try {
      const data = await fetchISSData();

      const point = {
        lat: data.lat,
        lng: data.lng,
        alt: data.altKm / 6371
      };

      currentLat = point.lat;
      currentLng = point.lng;
      currentAltKm = data.altKm;
      currentVelocityKmh = data.velocityKmh;
      currentVisibility = data.visibility;
      currentFootprintKm = data.footprintKm;
      isConnected = true;
      lastFetchMs = Date.now();

      history = [...history.slice(-(MAX_HISTORY - 1)), point];

      const isInitialBoost = boostPulsesRemaining > 0;
      if (isInitialBoost) {
        boostPulsesRemaining -= 1;
      }

      globe.objectsData([point]);
      globe.pointsData([
        {
          lat: point.lat,
          lng: point.lng,
          alt: 0.01,
          size: isInitialBoost ? 0.36 : 0.22,
          color: isInitialBoost ? '#6affc8' : '#00ff9d'
        }
      ]);

      globe.ringsData([
        {
          lat: point.lat,
          lng: point.lng,
          maxR: isInitialBoost ? 3.2 : 2.4,
          speed: isInitialBoost ? 1.95 : 1.5,
          period: isInitialBoost ? 430 : 520,
          colors: isInitialBoost
            ? ['rgba(0, 255, 157, 1)', 'rgba(0, 255, 157, 0.35)']
            : ['rgba(0, 255, 157, 0.9)', 'rgba(0, 255, 157, 0.18)']
        },
        {
          lat: point.lat,
          lng: point.lng,
          maxR: isInitialBoost ? 1.6 : 1.15,
          speed: isInitialBoost ? 1.15 : 0.95,
          period: isInitialBoost ? 430 : 520,
          colors: isInitialBoost
            ? ['rgba(0, 255, 157, 0.85)', 'rgba(0, 255, 157, 0.24)']
            : ['rgba(0, 255, 157, 0.7)', 'rgba(0, 255, 157, 0.14)']
        }
      ]);

      if (!hasInitialFraming) {
        centerIssView();
        hasInitialFraming = true;
      }

      if (showPath) {
        updateArcs();
      } else {
        globe.arcsData([]);
      }
    } catch (error) {
      isConnected = false;
      console.error('Failed to fetch ISS position:', error);
    }
  }

  onMount(async () => {
    const { initGlobe } = await import('./lib/createGlobe.js');

    globe = initGlobe(container);

    fetchISS();
    fetchInterval = setInterval(fetchISS, POLL_INTERVAL);

    countdownInterval = setInterval(() => {
      const elapsed = Date.now() - lastFetchMs;
      const remaining = Math.max(0, POLL_INTERVAL - elapsed);
      countdownSeconds = Math.ceil(remaining / 1000);
      countdownPct = (remaining / POLL_INTERVAL) * 100;
    }, 100);

    updateClock();
    clockInterval = setInterval(updateClock, 1000);
  });

  onDestroy(() => {
    clearInterval(fetchInterval);
    clearInterval(countdownInterval);
    clearInterval(clockInterval);
  });
</script>

<div bind:this={container} style="width: 100vw; height: 100vh;"></div>

<Header {isConnected} {utcClock} />

<TelemetryPanel
  {currentLat}
  {currentLng}
  {currentAltKm}
  {currentVelocityKmh}
  {currentVisibility}
  {currentFootprintKm}
/>

<OrbitPanel
  historyLength={history.length}
  maxHistory={MAX_HISTORY}
  {countdownSeconds}
  {countdownPct}
/>

<ControlsPanel
  {showPath}
  onCenterIss={centerIssView}
  onTogglePath={togglePath}
  onClearPath={clearPath}
  onResetView={resetView}
/>

<Corners />
<Ticker />

