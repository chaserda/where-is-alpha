<script>
  /** @type {number | null} */
  export let currentLat = null;
  /** @type {number | null} */
  export let currentLng = null;
  /** @type {number | null} */
  export let currentAltKm = null;
  /** @type {number | null} */
  export let currentVelocityKmh = null;
  /** @type {string | null} */
  export let currentVisibility = null;
  /** @type {number | null} */
  export let currentFootprintKm = null;
</script>

<aside class="panel panel-left">
  <div class="panel-header">Telemetry</div>
  <div class="data-rows">
    <div class="data-row">
      <span class="data-label">LATITUDE</span>
      <span class="data-value">{currentLat !== null ? `${currentLat.toFixed(4)}deg` : '---.----deg'}</span>
    </div>
    <div class="data-row">
      <span class="data-label">LONGITUDE</span>
      <span class="data-value">{currentLng !== null ? `${currentLng.toFixed(4)}deg` : '---.----deg'}</span>
    </div>
    <div class="data-row">
      <span class="data-label">ALTITUDE</span>
      <span class="data-value amber">{currentAltKm !== null ? `${currentAltKm.toFixed(1)} km` : '--- km'}</span>
    </div>
    <div class="data-row">
      <span class="data-label">VELOCITY</span>
      <span class="data-value amber">{currentVelocityKmh !== null ? `${currentVelocityKmh.toFixed(0)} km/h` : '------ km/h'}</span>
    </div>
    <div class="data-row">
      <span class="data-label">VISIBILITY</span>
      <span class="data-value">{currentVisibility !== null ? currentVisibility.toUpperCase() : '---'}</span>
    </div>
    <div class="data-row">
      <span class="data-label">FOOTPRINT</span>
      <span class="data-value">{currentFootprintKm !== null ? `${currentFootprintKm.toFixed(0)} km` : '---- km'}</span>
    </div>
  </div>
</aside>

<style>
  .panel {
    position: fixed;
    z-index: 10;
    background: rgba(4, 15, 26, 0.88);
    border: 1px solid #0a2a3a;
    backdrop-filter: blur(8px);
    border-radius: 2px;
  }

  .panel-left {
    left: 20px;
    top: 90px;
    width: 232px;
  }

  .panel-header {
    padding: 10px 14px;
    border-bottom: 1px solid #0a2a3a;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.55rem;
    letter-spacing: 0.3em;
    color: #00ff9d;
    text-transform: uppercase;
  }

  .data-rows {
    padding: 8px 0;
  }

  .data-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 7px 14px;
    border-bottom: 1px solid rgba(10, 42, 58, 0.4);
  }

  .data-row:last-child {
    border-bottom: none;
  }

  .data-label {
    font-size: 0.58rem;
    opacity: 0.55;
    letter-spacing: 0.08em;
  }

  .data-value {
    font-size: 0.78rem;
    color: #00ff9d;
    text-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
    letter-spacing: 0.05em;
  }

  .data-value.amber {
    color: #ffb700;
  }

  @media (max-width: 900px) {
    .panel-left {
      width: min(46vw, 230px);
    }
  }
</style>
