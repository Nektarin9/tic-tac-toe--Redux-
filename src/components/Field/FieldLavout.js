import styles from './FieldLavout.module.css';
import PropTypes from 'prop-types';

export const FieldLavout = ({ field, makeMove, currentPlayer, ...props }) => {
	return field.map((item, index) => (
		<button
			onClick={makeMove}
			key={Math.random()}
			className={`${styles.FieldLavoutButton} ${item === 'X' ? styles.red : styles.green}`}
			numberbtn={index}
		>
			{item}
		</button>
	));
};

FieldLavout.propTypes = {
	field: PropTypes.array,
	makeMove: PropTypes.func,
	currentPlayer: PropTypes.string,
};
