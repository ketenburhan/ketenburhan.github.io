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
    grid-template-columns: 260px 1fr;
    grid-gap: 160px;
    margin-bottom: 180px;
  }
  .icon {
    width: 260px;
    height: 260px;
    background-color: var(--base-color3);
    background-image: url("/robot.svg");
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 12px;
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
</style>
