<script>
	import { Scene } from 'phaser';
	import bug1Img from '@/assets/img/bug1.png';
	import bug2Img from '@/assets/img/bug2.png';
	import bug3Img from '@/assets/img/bug3.png';
	import bugPelletImg from '@/assets/img/bugPellet.png';
	import bugRepellentImg from '@/assets/img/bugRepellent.png';
	import codeyImg from '@/assets/img/codey.png';
	import platformImg from '@/assets/img/platform.png';

	export default class MainMenu extends Scene {
		constructor() {
			super({ key: 'MainMenu' });
		}

		init() {
			console.log(`${this.key}`);
		}

		preload() {
			this.load.image('bug1', bug1Img);
			this.load.image('bug2', bug2Img);
			this.load.image('bug3', bug3Img);
			this.load.image('codey', codeyImg);
			this.load.image('platform', platformImg);
			this.load.image('bugPellet', bugPelletImg);
			this.load.image('bugRepellent', bugRepellentImg);
			this.width = this.game.scale.width;
			this.height = this.game.scale.height;
		}

		create() {
			this.add.text(this.width * 0.52, this.height * 0.20, 'Bug Invaders', { fill: '#d660ff', fontSize: '30px', boundsAlignH: 'center', boundsAlignV: 'middle' }).setOrigin(0.5, 0);

			this.add.image(this.width * 0.33, this.height * 0.50, 'bug1').setOrigin(5, 0);
			this.add.image(this.width * 0.50, this.height * 0.33, 'bug2').setOrigin(0, 1);
			this.add.image(this.width * 0.66, this.height * 0.50, 'bug3').setOrigin(-5, 0);
			this.add.image(this.width * 0.50, this.height * 0.88, 'codey').setOrigin(0, -0.15);

			this.add.image(this.width * 0.5, this.height * 0.99, 'platform').setScale(1.7, 0.5);

			this.add.triangle(this.width * 0.5, this.height * 0.5, 0, 100, 100, 50, 0, 0, 0xe47fff).setOrigin(0.25, 0.3);
			this.add.text(this.width * 0.5, this.height * 0.5, 'Click to start!', { fill: '#000000', fontSize: '30px' }).setOrigin(0.4, 0);

			this.add.text(this.width * 0.5, this.height * 0.65, 'Move with arrow keys', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).setOrigin(0.40, 0);
			this.add.text(this.width * 0.5, this.height * 0.70, 'Shoot with spacebar', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).setOrigin(0.40, 0);
			this.add.text(this.width * 0.5, this.height * 0.75, 'Kill all invaders and do', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).setOrigin(0.45, 0);
			this.add.text(this.width * 0.5, this.height * 0.80, 'not let them reach you', { fill: '#000000', fontSize: '25px', boundsAlignH: 'center', boundsAlignV: 'middle' }).setOrigin(0.45, 0);

			this.input.on('pointerup', () => {
				this.launchScene('Level 1', this);
			});
		}

		launchScene(scene) {
			this.scene.stop(this);
			this.scene.start(scene);
		}
	}
</script>