<template>
	<section>
		<h1 class="push-top">Serica's programming portfolio</h1>

		<p><img src="@/assets/img/serica.jpg" id="profilepic" class="img-responsive" alt="profile pic">This is my web development portfolio. I
			will show here my latest projects and link them to each project's
			source code, which can be found on my GitHub. You can also find here my personal information and some
			useful links. Just use the navigation bar above.</p>

		<p>You can find my contact information and exact details of my studies on LinkedIn. Feel free to message me there.</p>

		<h3>Personal life:</h3>

		<ul class="languageslist">
			<li>Young woman living in Helsinki, Finland</li>
			<li>Self-taught developer with Helsinki Open University courses. Excellent grades.</li>
			<li>Obtained lots of codecamp certificates</li>
			<li>Loves music</li>
			<li>Pink and cute Japanese styles</li>
			<li>Likes to work with people</li>
		</ul>

		<h2>Programming skills:</h2>
		<ul class="languageslist">
			<li>Python 3</li>
			<ul class="modules">
				<li>Requests, BeautifulSoup, Pygame, PyScript</li>
			</ul>

			<li>Java</li>
			<ul class="modules">
				<li>Android studio</li>
			</ul>

			<li>C++</li>

			<li>JavaScript ES6+</li>
			<ul class="modules">
				<li>Vue.js, Node.js, Express.js, Mocha.js, Babel.js, Phaser.js</li>
			</ul>

			<li>SQL & SQLite3 basics</li>
			<li>CSS3, HTML5, Bootstrap</li>
			<li>GIT and Bash</li>
		</ul>

		<h3>Other skills:</h3>
		<ul class="languageslist">
			<li>Excellent in learning new technologies</li>
			<li>Problem solving skills</li>
			<li>Debugging skills</li>
			<li>Game testing</li>
			<li>Teamwork and communication skills</li>
		</ul>

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
					<a  href="https://sericakitty.github.io/phasergame/buginvader">
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
				<p>Tic-tac-toe - game <br/> Play agains your friend</p>
				
			</div>

		</div>

	</section>
</template>