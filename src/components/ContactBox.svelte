<div class="box">
  <a href="https://twitter.com/ketenburan" target="_blank"
    ><img src="twitter.svg" alt="Twitter" /></a
  >
  <div class="spacer" />
  <a href="https://www.linkedin.com/in/ketenburhan/" target="_blank"
    ><img src="linkedin.svg" alt="LinkedIn" /></a
  >
  <div class="spacer" />
  <a href="https://github.com/ketenburhan" target="_blank"
    ><img src="github.svg" alt="GitHub" /></a
  >
</div>

<style>
  .box {
    --border-width: 18px;
    --padding: 50px;

    width: 700px;
    max-width: calc(100% - 2 * var(--border-width) - var(--padding) * 2);
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: var(--border-width) solid var(--other-orange);
    margin: auto;
    padding: var(--padding);
    border-radius: 54px;
  }

  :global(.mobile_screen) .box {
    --border-width: 3px;
    border-radius: 60px;
    --padding: 20px;
  }

  img {
    max-width: 12vw;
  }

  .spacer {
    background: transparent !important;
    width: 20%;
    min-width: 48px;
  }
</style>
