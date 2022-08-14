<script>
  let screenWidth;
  $: tablet_screen = screenWidth < 960;
  $: mobile_screen = screenWidth < 540;
</script>

{#if !mobile_screen}
  <img
    class="decoration big-circles"
    src="big-circles.svg"
    alt="big circles decoration"
    onerror="this.style.display = 'none'"
  />
  <img
    class="decoration small-circles"
    src="small-circles.svg"
    alt="small circles decoration"
    onerror="this.style.display = 'none'"
  />
  <img
    class="decoration half-stripes"
    src="half-stripes.svg"
    alt="half stripes decoration"
    onerror="this.style.display = 'none'"
  />
  <img
    class="decoration full-stripes"
    src="full-stripes.svg"
    alt="full stripes decoration"
    onerror="this.style.display = 'none'"
  />
{:else}
  <img
    class="decoration mobile-circles"
    src="mobile-circles.svg"
    alt="mobile circles decoration"
    onerror="this.style.display = 'none'"
  />
{/if}

<div
  style="position: relative;"
  bind:clientWidth={screenWidth}
  class:tablet_screen
  class:mobile_screen
>
  <slot />
  {#if tablet_screen}
    <img
      class="bottom-circles"
      src="bottom-circles.svg"
      alt="bottom circles decoration"
      onerror="this.style.display = 'none'"
    />
  {/if}
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

  .big-circles {
    max-width: 18vw;
    transform: translateY(-100%);
    top: 1300px;
  }

  .small-circles {
    max-width: 20vw;
    transform: translateY(-50%);

    top: 2400px;
    right: var(--scrollbar-width);
  }

  .half-stripes {
    top: 2244px;
    right: 50%;
    max-width: unset;
  }

  .full-stripes {
    top: 4800px;
    transform: translateY(-40%);
    max-width: 150vw;
  }

  .bottom-circles {
    width: 100%;
  }

  .mobile-circles {
    top: 230px;
    right: var(--scrollbar-width);

    width: 10vw;
  }
</style>
