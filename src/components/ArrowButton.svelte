<script>
  export let href;
</script>

<a {href}>
  <div class="arrow-button">
    <div class="inner">
      <slot />
      <div class="arrow" />
    </div>
  </div>
</a>

<style>
  a {
    text-decoration: none;
  }
  .arrow-button {
    color: var(--base-color2);
    font-size: 24px;
    padding: 13px 32px 15px 32px;
    border: 2px solid var(--light-blue);
    border-radius: 24px;
  }
  .arrow-button:hover {
    background-color: var(--almost-white);
  }

  .inner {
    width: 130px;
    height: 32px;

    font-family: "Roboto", sans-serif;
    font-size: 24px;
    text-align: center;
  }
  .arrow {
    position: relative;

    width: 120px;
    height: 3px;

    transform: translate(-5px, -50%);

    background-color: var(--base-color2);

    margin: 4px auto;
  }
  .arrow::after {
    content: "";
    display: block;

    width: 0px;
    height: 0px;

    position: absolute;
    right: -5px;
    top: 50%;

    border-top: 8px solid transparent;
    border-left: 14px solid var(--base-color2);
    border-bottom: 8px solid transparent;

    transform: translate(50%, -50%);
  }
</style>
