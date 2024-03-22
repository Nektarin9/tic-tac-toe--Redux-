import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const Information = () => {
	let status;
	const { currentPlayer, isGameEnded, isDraw } = store.getState();
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}
	return (
		<InformationLayout
			isDraw={isDraw}
			status={status}
			currentPlayer={currentPlayer}
		></InformationLayout>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
