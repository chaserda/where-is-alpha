<div class="corner corner-tl"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 38 L2 2 L38 2"></path></svg></div>
<div class="corner corner-tr"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 38 L2 2 L38 2"></path></svg></div>
<div class="corner corner-bl"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 38 L2 2 L38 2"></path></svg></div>
<div class="corner corner-br"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M2 38 L2 2 L38 2"></path></svg></div>

<style>
  .corner {
    position: fixed;
    z-index: 9;
    width: 40px;
    height: 40px;
    pointer-events: none;
  }

  .corner svg {
    width: 100%;
    height: 100%;
  }

  .corner :global(path) {
    stroke: #0a2a3a;
    stroke-width: 1.5;
    fill: none;
  }

  .corner-tl { top: 0; left: 0; }
  .corner-tr { top: 0; right: 0; transform: scaleX(-1); }
  .corner-bl { bottom: 0; left: 0; transform: scaleY(-1); }
  .corner-br { bottom: 0; right: 0; transform: scale(-1); }
</style>
