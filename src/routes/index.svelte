<script>
  import { NavigationBar, Bars, ProjectPreview, ContactBox } from "$components";
</script>

<svelte:head>
  <title>Burhan Keten</title>
</svelte:head>

<NavigationBar />

<div class="heading-container">
  <p class="name">Burhan Keten</p>
  <p class="info">Showcase of me and my work.</p>
</div>

<div class="about-container">
  <div class="picture" />
  <div class="about-me">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae
      facilis quod, esse quo ut quaerat. Aperiam asperiores necessitatibus, nisi
      magnam adipisci ducimus voluptates aspernatur, nesciunt deleniti
      voluptate, exercitationem voluptatibus odio debitis reprehenderit
      similique? Minus, alias.
    </p>
  </div>
</div>

<div class="projects-container" id="projects">
  <div class="header">
    <h1>Projects</h1>
    <Bars small />
  </div>

  <ProjectPreview
    name="pager-rs"
    repoLink="https://github.com/ketenburhan/pager-rs"
  >
    <div slot="description">
      Cross-platform, customizable terminal pager library for rust.
    </div>
  </ProjectPreview>

  <ProjectPreview
    name="ascii-webcam"
    repoLink="https://github.com/ketenburhan/ascii-webcam"
  >
    <div slot="description">
      Create realtime ascii image in your terminal from webcam.
    </div>
  </ProjectPreview>

  <div class="float-right">
    <a
      href="https://github.com/ketenburhan?tab=repositories"
      class="blue-button">See All Projects</a
    >
  </div>
</div>

<div class="contact-container" id="contact">
  <div class="header">
    <h1>Contact</h1>
    <Bars small />
  </div>
  <ContactBox />
  <a class="mail" href="mailto:ketenburhan@protonmail.com"
    >ketenburhan@protonmail.com</a
  >
</div>

<style>
  :root {
    padding-top: 96px;
    background: var(--background-color);
  }

  h1 {
    font-size: 4rem;
    color: var(--light-grey);
    font-family: "Montserrat", sans-serif;
  }

  :global(.mobile_screen) h1 {
    font-size: 16vw;
  }

  .heading-container {
    margin-top: 300px;
  }

  :global(.mobile_screen) .heading-container {
    margin-top: 240px;
  }

  .name,
  .info {
    color: var(--light-grey);
    text-align: center;
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }

  .name {
    font-size: 128px;
    font-weight: bold;
  }

  :global(.tablet_screen) .name {
    font-size: 84px;
    font-size: 12vw;
  }

  .info {
    margin-top: 32px;
    font-size: 32px;
  }

  :global(.tablet_screen) .info {
    font-size: 4vw;
  }

  .about-container {
    margin: auto;
    margin-top: 500px;
    width: 64%;
  }

  :global(.tablet_screen) .about-container {
    width: 80%;
  }
  :global(.mobile_screen) .about-container {
    margin-top: 300px;
  }

  .picture {
    width: 360px;
    max-width: 80%;
    aspect-ratio: 1;
    border-radius: 20px;
    background-image: url("/ktn.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border: 10px solid var(--picture-border);
    margin: auto;
  }

  .about-me {
    width: 100%;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    color: var(--light-grey);
    text-align: center;
    font-weight: 500;
    margin-top: 120px;
    line-height: 185%;
  }

  :global(.tablet_screen) .about-me {
    font-size: 16px;
    font-weight: 600;
  }

  .projects-container {
    width: 80%;
    margin: auto;
    margin-top: 760px;
  }

  :global(.tablet_screen) .projects-container {
    width: 90%;
  }

  :global(.mobile_screen) .projects-container {
    margin-top: 300px;
  }

  .header {
    width: 400px;
    max-width: 100%;
    margin: auto;
    margin-bottom: 260px;
    padding-top: 40px;
    text-align: center;
  }
  :global(.mobile_screen) .header {
    margin-bottom: 140px;
  }

  .float-right {
    display: flex;
    align-items: end;
    flex-direction: column;
  }

  .blue-button {
    display: block;
    padding: 32px;
    background-color: var(--base-color3);
    border-radius: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: var(--light-grey);
    font-size: 1.5rem;
    text-decoration: none;
  }
  :global(.mobile_screen) .blue-button {
    margin: auto;
    padding: 16px 48px;
    font-size: 6vw;
  }

  .contact-container {
    width: 90%;
    margin: auto;
    margin-top: 960px;
  }

  :global(.mobile_screen) .contact-container {
    margin-top: 300px;
  }

  .mail {
    display: block;
    text-decoration: none;
    color: var(--other-orange);
    text-align: center;
    font-size: 3em;
    margin: 130px auto;
    font-family: "Montserrat", sans-serif;
  }
  :global(.tablet_screen) .mail {
    font-size: 5.2vw;
  }
</style>
