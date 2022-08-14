<script>
  import { Bars, ArrowButton } from "$components";
</script>

<div class="navbar">
  <div class="nav">
    <a href="#projects">Projects</a>
    <div class="spacer" />
    <a href="#contact">Contact</a>
    <div class="spacer" />
    <a href="https://github.com/ketenburhan" class="github"
      ><button>GitHub</button></a
    >
  </div>
  <Bars />
</div>

<style>
  .nav {
    color: var(--light-grey);
    font-size: 48px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: auto;
    padding-bottom: 12px;
  }

  :global(.tablet_screen) .nav {
    font-size: 36px;
    font-size: 5vw;
    width: 90%;
  }

  .spacer {
    background: transparent !important;
    width: 20%;
    min-width: 16px;
  }

  .nav a {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: var(--light-grey);
    text-decoration: none;
  }

  .github {
    height: min-content;
    border-radius: 30px;
  }

  .github button {
    display: block;
    border: 2px solid var(--light-blue);
    border-radius: 30px;
    font-size: 0.7em;
    padding: 8px 40px;

    font-family: "Roboto", sans-serif;
    font-weight: normal;

    text-align: center;
    color: var(--base-color2) !important;

    background-color: transparent;
    cursor: pointer;
  }

  :global(.tablet_screen) .github button {
    font-size: 0.8em;
  }

  :global(.mobile_screen) .github button {
    padding: 8px 20px;
  }

  .github button:hover {
    background-color: var(--almost-white);
  }
</style>
