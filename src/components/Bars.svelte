<script>
  export let small;
</script>

<div class="bars-container" class:small>
  <div class="bar bar-1" />
  <div class="bar bar-2" />
  <div class="bar bar-3" />
</div>

<style>
  .bars-container {
    width: 100%;
  }

  .bar {
    width: 100%;
    height: 8px;
    margin-bottom: 7px;
  }

  .small .bar {
    height: 4px;
    margin-bottom: 3px;
  }

  .bar:last-child {
    margin: 0;
  }

  .bar-1 {
    background-color: var(--base-color1);
  }
  .bar-2 {
    background-color: var(--base-color2);
  }
  .bar-3 {
    background-color: var(--base-color3);
  }
</style>
