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
	.navbar {
		background-color: var(--navbar-bg-color);
		margin-bottom: 20px;
		font-size: 120%;
		padding: 0px;
		box-shadow: 0 2px 2px -2px var(--navbar-bg-color);
	}

	/* Styling link text color for bootstrap navbar */

	.navtext {
		color: var(--navbar-link-color);
	}

	.active {
		color: var(--main-header-color);
	}

	.navbar li a:hover {
		color: var(--main-header-color);
		transition-duration: var(--link-transition-duration);
		text-decoration: none;
	}

	.dropdown-menu {
		background-color: var(--navbar-bg-color);
	}

	.dropdown-menu a {
		color: var(--navbar-link-color);
	}

	.dropdown-item:hover {
		background-color: var(--navbar-bg-color);
		color: var(--main-header-color);
	}

	/* TEMPORARY FIX FOR COLOR PROBLEM IN NAV BAR */
	.navtext:not(:active) {
		color: var(--navbar-link-color);
	}
</style>
