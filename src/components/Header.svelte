<script>
  export let isConnected = false;
  export let utcClock = '--:--:-- UTC';
</script>

<header class="top-header">
  <div class="logo-wrap">
    <div class="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="6" stroke="currentColor" stroke-width="1.5"></circle>
        <ellipse cx="18" cy="18" rx="16" ry="6" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2"></ellipse>
        <ellipse cx="18" cy="18" rx="16" ry="6" stroke="currentColor" stroke-width="1" transform="rotate(60 18 18)" opacity="0.4"></ellipse>
        <ellipse cx="18" cy="18" rx="16" ry="6" stroke="currentColor" stroke-width="1" transform="rotate(120 18 18)" opacity="0.4"></ellipse>
        <circle cx="18" cy="4" r="2" fill="currentColor"></circle>
      </svg>
    </div>
    <div>
      <h1>Where Is Alpha</h1>
      <div class="subtitle">International Space Station - Zarya - 25544</div>
    </div>
  </div>
  <div class="status-bar">
    <div class="status-indicator">
      <span class:dot-ok={isConnected} class:dot-bad={!isConnected} class="status-dot"></span>
      <span>{isConnected ? 'LIVE' : 'LOADING...'}</span>
    </div>
    <span class="divider">|</span>
    <span>{utcClock}</span>
  </div>
</header>

<style>
  .top-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 28px;
    background: linear-gradient(180deg, rgba(2, 12, 20, 0.95) 0%, transparent 100%);
    border-bottom: 1px solid #0a2a3a;
  }

  .logo-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-mark {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00ff9d;
    text-shadow: 0 0 12px #00ff9d;
  }

  .logo-mark svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 6px #00ff9d);
  }

  h1 {
    margin: 0;
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
    letter-spacing: 0.25em;
    color: #00ff9d;
    text-shadow: 0 0 20px #00ff9d;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 0.6rem;
    letter-spacing: 0.25em;
    opacity: 0.5;
    margin-top: 2px;
  }

  .status-bar {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
  }

  .dot-ok {
    background: #00ff9d;
    box-shadow: 0 0 8px #00ff9d;
  }

  .dot-bad {
    background: #ff3c3c;
    box-shadow: 0 0 8px #ff3c3c;
  }

  .divider {
    opacity: 0.35;
  }

  @media (max-width: 900px) {
    .top-header {
      padding: 12px 14px;
    }

    h1 {
      font-size: 0.8rem;
      letter-spacing: 0.15em;
    }
  }
</style>
