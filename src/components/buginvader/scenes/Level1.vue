<script>
	import LevelHandler from '@/components/buginvader/scenes/LevelHandler.vue';

	export default class Level1 extends LevelHandler {
		constructor() {
			super('Level 1');
			this.gameState.enemyGroups = ['bug1'];
			this.gameState.numOfEnemiesPerXLine = 5;
			this.gameState.numOfEnemiesPerYLine = 1;
		}
	}

</script>