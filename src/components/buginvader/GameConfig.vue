<script>
	import Phaser from 'phaser';
	import Level1 from '@/components/buginvader/scenes/Level1.vue';
	import Level2 from '@/components/buginvader/scenes/Level2.vue';
	import Level3 from '@/components/buginvader/scenes/Level3.vue';
	import LevelBonus from '@/components/buginvader/scenes/LevelBonus.vue';
	import MainMenu from '@/components/buginvader/MainMenu.vue';
	import EndMenu from '@/components/buginvader/EndMenu.vue';

	export default {
		type: Phaser.CANVAS,
		backgroundColor: 'b9eaff',
		scale: {
			mode: Phaser.Scale.NONE,
			width: window.innerWidth / 2,
			height: window.innerHeight * 0.75,
		},
		fps: { target: 60 },
		parent: 'game',
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 200 },
				debug: false,
			},
		},
		scene: [MainMenu, Level1, Level2, Level3, LevelBonus, EndMenu],
	};

</script>
