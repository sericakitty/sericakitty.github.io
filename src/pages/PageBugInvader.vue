<template>
	<section>
		<div class='gamecenteringcontainer' id='game'>
		</div>
	</section>
</template>

<script>
	import { Game } from 'phaser';
	import GameConfig from '@/components/buginvader/GameConfig.vue';

	export default {
		mounted() {
			this.initializePhaser();
		},
		methods: {
			initializePhaser() {
				this.config = GameConfig;
				this.phaserGame = new Game(this.config);
			},
		},
	};
</script>