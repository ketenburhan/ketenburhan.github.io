<img
  class="decoration"
  style="top: 384px;"
  src="big-circles.svg"
  alt="big circles decoration"
  onerror="this.style.display = 'none'"
/>
<img
  class="decoration"
  style="top: 2124px; right: 0;"
  src="small-circles.svg"
  alt="small circles decoration"
  onerror="this.style.display = 'none'"
/>
<img
  class="decoration"
  style="top: 2244px;"
  src="half-stripes.svg"
  alt="half stripes decoration"
  onerror="this.style.display = 'none'"
/>
<img
  class="decoration"
  style="top: 3990px;"
  src="full-stripes.svg"
  alt="full stripes decoration"
  onerror="this.style.display = 'none'"
/>

<div style="position: relative;">
  <slot />
</div>

<style>
  :root {
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    scroll-behavior: smooth;

    --base-color1: #ffcb9a;
    --base-color2: #ff5e5e;
    --base-color3: #277482;

    --light-grey: #d8d8d8;
    --almost-white: #efefef;
    --light-blue: #5ed8ff;

    --background-color: #2c3532;

    --picture-border: #3a4642;

    --other-orange: #ff7b5e;
  }

  .decoration {
    position: absolute;
    max-width: 100vw;
  }
</style>
