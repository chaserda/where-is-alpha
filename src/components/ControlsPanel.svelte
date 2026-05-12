<script>
  export let showPath = true;

  /** @type {() => void} */
  export let onCenterIss = () => {};
  /** @type {() => void} */
  export let onTogglePath = () => {};
  /** @type {() => void} */
  export let onClearPath = () => {};
  /** @type {() => void} */
  export let onResetView = () => {};
</script>

<aside class="panel panel-controls">
  <div class="panel-header">Controls</div>
  <button class="control-btn" on:click={onCenterIss}>Center ISS</button>
  <button class="control-btn" class:active={showPath} on:click={onTogglePath}>
    {showPath ? 'Hide Path' : 'Show Path'}
  </button>
  <button class="control-btn" on:click={onClearPath}>Clear Path</button>
  <button class="control-btn" on:click={onResetView}>Reset View</button>
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

  .panel-controls {
    right: 20px;
    bottom: 30px;
    width: 220px;
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

  .control-btn {
    width: 100%;
    padding: 10px 14px;
    background: none;
    border: none;
    border-bottom: 1px solid #0a2a3a;
    color: #a8d8ea;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    cursor: pointer;
    text-align: left;
    text-transform: uppercase;
  }

  .control-btn:last-child {
    border-bottom: none;
  }

  .control-btn.active,
  .control-btn:hover {
    background: rgba(0, 255, 157, 0.06);
    color: #00ff9d;
  }

  @media (max-width: 900px) {
    .panel-controls {
      width: min(46vw, 230px);
    }
  }
</style>
