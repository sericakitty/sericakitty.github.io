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
								<router-link :to="{ name: 'buginvader' }" class="nav-link navtext">The Bug Invader</router-link>
							</div>
						</div>
					</li>
					<li class="nav-item">
						<div class="dropdown show">
							<a class="dropdown-toggle nav-link navtext" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Vanilla JS projects</a>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<a href="https://sericakitty.github.io/creditcardchecker/creditcardchecker.html" class="dropdown-item">Credit Card Checker</a>
								<a href="https://sericakitty.github.io/messagemixer/messagemixer.html" class="dropdown-item">Message Mixer</a>
								<a href="https://sericakitty.github.io/stopwatch/stopwatch.html" class="dropdown-item">Stopwatch</a>
							</div>
						</div>
					</li>

					<li class="nav-item">
						<div class="dropdown show">
							<a class="dropdown-toggle nav-link navtext" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Python projects</a>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<a href="https://sericakitty.github.io/timecalculator/timecalculator.html" class="dropdown-item">Time Calculator</a>
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

	export default {

	};

</script>

<style lang='css'>
	
</style>
