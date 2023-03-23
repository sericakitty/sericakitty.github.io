<template>
  <section>
    <h1 class="push-top">Serica's portfolio</h1>

    <p><img src="@/assets/img/serica.jpg" id="profilepic" class="img-responsive" alt="profile pic">
      This is my web development portfolio.
      Here you will find my latest projects and link to each of the projects.
      In each project you can find the source code, which can be found on my GitHub.
    </p>

    <p>You can find my contact information and exact details of my studies on LinkedIn. Feel free to message me there.</p>

    <h2>Programming skills:</h2>
    <ul class="languageslist">
      <li>Fullstack development</li>
      <ul class="modules">
        <li>JavaScript, React, Vue, Node, Express, Mongo.db, SQLite, testing</li>
        <li>Babel.js, Phaser.js, CSS, HTML, Bootstrap</li>
      </ul>

      <li>Python 3</li>
      <ul class="modules">
        <li>PyScript, Pygame, Requests & BeautifulSoup basics</li>
      </ul>

      <li>GIT and Bash</li>
      <li>Java & C++ basics</li>
    </ul>

    <div class='row'>
      <div class='col'>
        <h3>Other skills:</h3>
        <ul class="languageslist">
          <li>Excellent in learning new technologies</li>
          <li>Problem solving skills</li>
          <li>Debugging skills</li>
          <li>Game testing</li>
          <li>Teamwork and communication skills</li>
        </ul>
      </div>

      <div class='col'>
        <h3>Personal life:</h3>

        <ul class="languageslist">
          <li>Young woman living in Helsinki, Finland</li>
          <li>Self-taught developer with Helsinki Open University courses. Excellent grades.</li>
          <li>Loves music</li>
          <li>Likes to work with people</li>
        </ul>
      </div>
    </div>

    <h2 class="text-center projectshowcase">Projects showcase:</h2>
    <div class="row">
      <div class="text-center column">
        <h3>JavaScript</h3>
        <div class="card">
          <a href="https://sericakitty.github.io/messagemixer/">
            <img src="../assets/img/cards/messagemixer.png" alt="Message mixer - app" />
          </a>
        </div>
        <p>Application where you can input string and it will cyphen it</p>
      </div>

      <div class="text-center column">
        <h3>Vue Js</h3>
        <div class="card">
          <a href="https://sericakitty.github.io/phasergame/buginvader">
            <img src="../assets/img/cards/buginvader.png" alt="Bug Invader">
          </a>
        </div>
        <p>Phaser - game where you have to defeat bug invaders</p>
      </div>

      <div class="text-center column">
        <h3>Python 3</h3>
        <div class="card">
          <a href="https://sericakitty.github.io/tictactoe/">
            <img src="../assets/img/cards/tictactoe.png" alt="Tic tac toe - game" />
          </a>
        </div>
        <p>Tic-tac-toe - game <br /> Play agains your friend</p>

      </div>

    </div>

  </section>
</template>