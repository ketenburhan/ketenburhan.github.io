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

  .heading-container {
    margin-top: 400px;
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
  .info {
    margin-top: 32px;
    font-size: 32px;
  }

  .about-container {
    margin: auto;
    margin-top: 700px;
    width: 64%;
    display: grid;

    /* for now */
    /* grid-template-columns: repeat(2, 1fr); */
  }

  .picture {
    width: 360px;
    height: 360px;
    border-radius: 20px;
    background-image: url("/ktn.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    border: 10px solid var(--picture-border);

    /* for now */
    margin: auto;
  }

  .about-me {
    /* for now */
    display: none;

    width: 560px;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    color: var(--light-grey);
  }

  .projects-container {
    width: 60%;
    margin: auto;
    margin-top: 760px;
  }

  .header {
    width: 400px;
    margin: auto;
    margin-bottom: 260px;
    padding-top: 40px;
    text-align: center;
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

  .contact-container {
    margin-top: 960px;
  }

  .mail {
    display: block;
    text-decoration: none;
    color: var(--other-orange);
    text-align: center;
    font-size: 3rem;
    margin: 130px auto;
    font-family: "Montserrat", sans-serif;
  }
</style>
