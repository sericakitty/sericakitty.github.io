<template>
  <h1>Contact</h1>

  <div class="textfield">
    <p class="text-center">You can contact me via email and social media links</p>
  </div>

  <div class="personal_contact_div">
    <img class="personal_contact" src="../assets/images/serica_kitty_mail.webp" alt="Artist email">
  </div>
  <div class="text-center contact_button_div">

    <a href="https://www.instagram.com/sericakitty" target="_blank" aria-label="Visit my Instagram profile">
        <img class="contact-icon" src="../assets/images/instagram_logo.svg"
          alt="Instagram logo and link" />
    </a>

    <a href="https://www.linkedin.com/in/serica-suhonen/" target="_blank" aria-label="Visit my LinkedIn profile">
        <img class="contact-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
          alt="LinkedIn logo and link" />
    </a>

    <a href="https://github.com/sericakitty/" target="_blank" aria-label="Visit my Github profile">
        <img class="contact-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github logo and link"/>
    </a>


    <a href="https://github.com/sericakitty/" target="_blank" aria-label="Visit my Facebook profile">
        <img class="contact-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" alt="Facebook logo and link"/>
    </a>
    
  </div>

</template>

<style>
  .contact-icon {
    max-width: 50px;
    margin-right: 25px;
    margin-bottom: 15px;
    border-radius: 5px;
  }

  .contact_button a {
  margin: 5px;
  width: 100px;
  border-radius: 15px;
  background-color: #cfcfcf;
  border: 1px solid var(--color-light-pink);
}

.contact_button a:hover {
  background-color: var(--color-magenta);
  color: var(--color-light-pink);
  border: 1px solid var(--color-light-pink);
}

.contact_button_div {
  margin-top: 20px;
}
</style>