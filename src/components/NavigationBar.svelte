<script>
  import { Bars, ArrowButton } from "$components";
</script>

<div class="navbar">
  <div class="nav">
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
  <Bars />
  <div class="arrow-button">
    <ArrowButton href="https://github.com/ketenburhan">GitHub</ArrowButton>
  </div>
</div>

<style>
  .navbar {
    width: 75%;
    margin: auto;
    position: relative;
    padding-top: 5px;
  }

  .nav {
    color: var(--light-grey);
    font-size: 48px;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    width: max-content;
    margin: auto;
    grid-gap: 144px;
    margin-bottom: 8px;
  }
  .nav a {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: var(--light-grey);
    text-decoration: none;
    padding-bottom: 8px;
  }
  .arrow-button {
    position: absolute;
    top: -4px;
    right: 0;
  }
</style>
