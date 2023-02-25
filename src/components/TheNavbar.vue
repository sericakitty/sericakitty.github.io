<template>
  <section>
    <header class="header" id="header">
      <nav>
        <ul class="nav justify-content-center navbar">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link navtext">Home</router-link>
          </li>

          <li class="nav-item">
            <div class="dropdown show">
              <a class="dropdown-toggle nav-link navtext" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Vue projects</a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a href="https://sericakitty.github.io/bug-invaders/" class="dropdown-item">Bug Invaders</a>
                <a href="https://sericakitty.github.io/reaction-timer/" class="dropdown-item">Reaction Timer</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown show">
              <a class="dropdown-toggle nav-link navtext" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Vanilla JS projects</a>
              <div id="vanillajsprojects" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a href="https://sericakitty.github.io/creditcardchecker/" class="dropdown-item">Credit card checker</a>
                <a href="https://sericakitty.github.io/messagemixer/" class="dropdown-item">Message mixer</a>
                <a href="https://sericakitty.github.io/stopwatch/" class="dropdown-item">Stopwatch</a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <div class="dropdown show">
              <a class="dropdown-toggle nav-link navtext" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Python projects</a>
              <div id="pythonprojects" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a href="https://sericakitty.github.io/timecalculator" class="dropdown-item">Time calculator</a>
                <a href="https://sericakitty.github.io/fromthehat" class="dropdown-item">From the Hat</a>
                <a href="https://sericakitty.github.io/tictactoe" class="dropdown-item">Tic-tac-toe</a>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'dj' }" class="nav-link navtext">DJ</router-link>
          </li>

          <li class="nav-item">
            <a href="https://github.com/sericakitty" role="button" class="nav-link navtext" target="_blank">GitHub</a>
          </li>

          <li class="nav-item">
            <a href="https://www.linkedin.com/in/serica-suhonen/" class="nav-link navtext" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </header>
  </section>
</template>

<script>
export default {};
</script>

<style lang="css"></style>
