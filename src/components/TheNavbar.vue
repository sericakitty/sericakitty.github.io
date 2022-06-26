<template>
	<section>
		<header class="header" id="header">
			<!-- use .navbar-open to open nav -->
			<nav>

				<ul class="nav justify-content-center navbar">

					<li class="nav-item">
						<router-link :to="{ name: 'home' }" class="nav-link navtext">Home Page</router-link>
					</li>

					<li class="nav-item">
						<div class="dropdown show">
							<a class="dropdown-toggle nav-link navtext" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Vanilla JS projects</a>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<a href="https://sericakitty.github.io/creditcardchecker/creditcardchecker.html" class="dropdown-item" target="_blank">Credit Card Checker</a>
								<a href="https://sericakitty.github.io/messagemixer/messagemixer.html" class="dropdown-item" target="_blank">Message Mixer</a>
								<a href="https://sericakitty.github.io/stopwatch/stopwatch.html" class="dropdown-item" target="_blank">Stopwatch</a>
							</div>
						</div>
					</li>

					<li class="nav-item">
						<router-link :to="{ name: 'dj' }" class="nav-link navtext">DJ</router-link>
					</li>

					<li class="nav-item">
						<a href="https://sericasofia.github.io/" role="button" class="nav-link navtext" target="_blank">GitHub</a>
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
		components: {},
	};

</script>

<style lang='css'>
	/* TEMPORARY FIX FOR COLOR PROBLEM IN NAV BAR */
	.navtext:not(:active) {
		color: var(--navbar-link-color);
	}

	.navbar {
		background: var(--navbar-fallback-color);
		background: var(--navbar-bg-color);
		box-shadow: 0 2px 2px -2px var(--navbar-bg-color);
		margin-bottom: 40px;
		max-height: 100px;
	}

	.navtext {
		color: var(--navtext-color);
	}

	.navtext:hover {
		color: var(--navtext-hover-color);
	}

	.dropdown-menu {
		background-color: var(--navbar-fallback-color);
	}

	.dropdown-item {
		color: var(--navtext-color);
	}

	.dropdown-item:hover {
		background-color: var(--navbar-fallback-color);
		color: var(--dropdown-hover-color);
	}
</style>
