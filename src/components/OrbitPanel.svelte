<script>
  export let historyLength = 0;
  export let maxHistory = 50;
  export let countdownSeconds = 5;
  export let countdownPct = 100;
</script>

<aside class="panel panel-orbit">
  <div class="orbit-label">Trail Points</div>
  <div class="orbit-number">{historyLength}</div>
  <div class="orbit-label">of {maxHistory} max</div>
  <div class="orbit-divider"></div>
  <div class="next-update">Next update in {countdownSeconds}s</div>
  <div class="progress-track">
    <div class="progress-fill" style={`width: ${countdownPct}%`}></div>
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

  .panel-orbit {
    right: 20px;
    top: 90px;
    width: 210px;
    padding: 14px;
    text-align: center;
  }

  .orbit-number {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.2rem;
    font-weight: 900;
    color: #00ff9d;
    text-shadow: 0 0 30px #00ff9d;
    line-height: 1;
  }

  .orbit-label {
    font-size: 0.55rem;
    letter-spacing: 0.25em;
    opacity: 0.5;
    margin-top: 6px;
    text-transform: uppercase;
  }

  .orbit-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, #0a2a3a, transparent);
    margin: 12px 0;
  }

  .next-update {
    font-size: 0.6rem;
    color: #ffb700;
    letter-spacing: 0.1em;
  }

  .progress-track {
    height: 2px;
    background: #0a2a3a;
    margin-top: 8px;
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: #ffb700;
    box-shadow: 0 0 6px #ffb700;
    transition: width 0.1s linear;
  }

  @media (max-width: 900px) {
    .panel-orbit {
      width: min(46vw, 230px);
      top: auto;
      bottom: 120px;
    }
  }
</style>
