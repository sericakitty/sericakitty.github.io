<script>
	import LevelHandler from '@/components/buginvader/scenes/LevelHandler.vue';

	export default class LevelBonus extends LevelHandler {
		constructor() {
			super('Level Bonus');
			this.gameState.enemyGroups = ['bug1', 'bug2', 'bug3'];
			this.gameState.numOfEnemiesPerXLine = 5;
			this.gameState.numOfEnemiesPerYLine = 4;
		}
	}

</script>