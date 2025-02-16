import { Field } from './components/field/field';
import { Information } from './components/information/information';
import styles from './game.module.css';
import { handleRestart } from './handlers/handle-restart';

export const GameLayout = () => (
	<div className={styles.game}>
		<Information />
		<Field />
		<button className={styles.restartButton} onClick={handleRestart}>
			Начать заново
		</button>
	</div>
);
