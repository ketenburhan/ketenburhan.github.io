<script>
  export let name;
  export let repoLink;
</script>

<div class="container">
  <div class="icon" />
  <div>
    <h2 class="project-name"><a href={repoLink}>{name}</a></h2>
    <p class="description"><slot name="description" /></p>
  </div>
</div>

<style>
  * {
    font-family: "Montserrat", sans-serif;
  }

  .container {
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 5fr;
    gap: 160px;
    margin-bottom: 180px;
  }

  :global(.tablet_screen) .container {
    grid-template-columns: 1fr 2fr;
    gap: 120px;
  }

  :global(.mobile_screen) .container {
    grid-template-columns: 1fr;
    gap: 16px;
    text-align: center;
  }

  .icon {
    width: 100%;
    max-width: 270px;
    aspect-ratio: 1;
    background-color: var(--base-color3);
    background-image: url("/robot.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 12px;
    margin: auto;
  }

  :global(.mobile_screen) .icon {
    width: 55%;
  }

  .project-name {
    font-size: 2rem;
  }

  .project-name a {
    color: var(--base-color1);
    text-decoration: none;
  }

  .description {
    color: var(--light-grey);
    font-size: 1.5rem;
  }

  :global(.tablet_screen) .description {
    font-size: 1.25rem;
  }
</style>
