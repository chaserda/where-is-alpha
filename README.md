# Where Is Alpha

A live ISS tracker rendered on an interactive 3D globe with a mission-control UI.

## Stack

- [Svelte](https://svelte.dev/) + [Vite](https://vitejs.dev/)
- [Globe.gl](https://globe.gl/) for the 3D globe
- [Three.js](https://threejs.org/) for the 3D ISS model
- [wheretheiss.at](https://wheretheiss.at/) API for live position data

## Features

- Live ISS position updated every 5 seconds
- 3D ISS model floating above the globe
- Ground beacon with animated pulse rings
- Path trail showing recent orbit history
- Telemetry readout: latitude, longitude, altitude, velocity, visibility, footprint
- UTC clock and countdown to next update
- Mission-control aesthetic with Orbitron + Share Tech Mono fonts

## Project Structure

```
src/
  app.css              # Global styles
  App.svelte           # Root orchestrator
  components/
    Header.svelte
    TelemetryPanel.svelte
    OrbitPanel.svelte
    ControlsPanel.svelte
    Corners.svelte
    Ticker.svelte
  lib/
    iss.js             # ISS API fetch helper
    createGlobe.js     # Globe.gl + Three.js setup (lazy loaded)
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Globe.gl and Three.js are split into a separate `globe-vendor` chunk to keep the main app bundle small.

