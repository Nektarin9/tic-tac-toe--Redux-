import styles from './GameLayout.module.css';
import { Field } from './Field/Field';
import { Information } from './Information/Information';
import { store } from '../store';
export const GameLayout = () => {
	const reset = () => {
		store.dispatch({ type: 'currentPlayer', payload: 'X' });
		store.dispatch({ type: 'isGameEnded', payload: false });
		store.dispatch({ type: 'isDraw', payload: false });
		store.dispatch({ type: 'field', payload: ['', '', '', '', '', '', '', '', ''] });
	};
	return (
		<section className={styles.GameLayoutHeader}>
			<div>
				<Information></Information>
				<div className={styles.GameLayoutContainerField}>
					<Field></Field>
				</div>
				<button onClick={reset} className={styles.GameLayoutBtn}>
					Начать заново
				</button>
			</div>
		</section>
	);
};
