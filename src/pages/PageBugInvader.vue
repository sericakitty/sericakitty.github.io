<template>
	<section>
		<div class='gamecenteringcontainer' id='game'>
		</div>
	</section>
</template>

<script>
	import Phaser from 'phaser';
	import GameConfig from '@/components/buginvader/GameConfig.vue';

	export default {
		mounted() {
			this.initializePhaser();
		},
		methods: {
			initializePhaser() {
				this.config = GameConfig;
				this.phaserGame = new Phaser.Game(this.config);
			},
		},
	};
</script>

<style>
</style>