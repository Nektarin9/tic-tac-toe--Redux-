import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ isDraw, status, currentPlayer, ...props }) => {
	return (
		<div className={styles.InformationLayoutContainer}>
			<p
				className={
					currentPlayer === 'X'
						? styles.InformationLayouColorRed
						: styles.InformationLayouColorGreen
				}
			>
				{status}
			</p>
		</div>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	status: PropTypes.string,
	currentPlayer: PropTypes.string,
};
