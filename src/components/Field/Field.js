import { FieldLavout } from './FieldLavout';
import PropTypes from 'prop-types';
import { store } from '../../store';
export const Field = () => {
	const { currentPlayer, isGameEnded, field } = store.getState();

	function checkTheWinner() {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			let count = 0;
			for (let j = 0; j <= 2; j++) {
				if (field[WIN_PATTERNS[i][j]] === currentPlayer) {
					count = count + 1;
				}
			}
			if (count === 3) {
				return true;
			}
		}
	}
	function checkTheDraw() {
		let count = 0;
		for (let i = 0; i < field.length; i++) {
			if (field[i]) {
				count = count + 1;
			}
		}
		if (count === field.length) {
			return true;
		} else {
			return false;
		}
	}
	function checkTheResult() {
		if (checkTheWinner()) {
			if (currentPlayer === 'X') {
				store.dispatch({ type: 'currentPlayer', payload: 'X' });
			} else {
				store.dispatch({ type: 'currentPlayer', payload: 'O' });
			}
			store.dispatch({ type: 'isGameEnded', payload: true });
		} else if (checkTheDraw()) {
			store.dispatch({ type: 'isDraw', payload: true });
		}
	}
	function makeMove(event) {
		const { target } = event;

		if (target.closest && !isGameEnded) {
			if (!target.textContent) {
				let index = Number(target.attributes[1].value);
				if (currentPlayer === 'X') {
					store.dispatch({ type: 'currentPlayer', payload: 'O' });
				} else {
					store.dispatch({ type: 'currentPlayer', payload: 'X' });
				}
				field[index] = currentPlayer;
				checkTheResult();
			}
		}
	}
	return (
		<FieldLavout
			makeMove={makeMove}
			field={field}
			currentPlayer={currentPlayer}
		></FieldLavout>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
};
