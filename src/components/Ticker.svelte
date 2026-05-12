<div class="ticker">
  <div class="ticker-text">
    ISS ALTITUDE ~408 KM - ORBITAL PERIOD ~92 MIN - ORBITAL SPEED ~27,600 KM/H - CREW 7 - LAUNCHED 1998 - LOW EARTH ORBIT
  </div>
</div>

<style>
  .ticker {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 24px;
    background: linear-gradient(0deg, rgba(2, 12, 20, 0.9) 0%, transparent 100%);
    border-top: 1px solid #0a2a3a;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .ticker-text {
    font-size: 0.55rem;
    letter-spacing: 0.15em;
    opacity: 0.3;
    white-space: nowrap;
    padding-left: 20px;
    animation: ticker-scroll 30s linear infinite;
  }

  @keyframes ticker-scroll {
    0% { transform: translateX(100vw); }
    100% { transform: translateX(-100%); }
  }
</style>
