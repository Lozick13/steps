import { IInput } from '../IInput';
import classes from './baseinput.module.css';

const BaseInput = ({
	id,
	name,
	value,
	type,
	change,
	min,
	required,
}: IInput) => {
	return (
		<>
			<input
				id={id}
				name={name}
				value={value}
				type={type}
				min={min}
				required={required}
				onChange={change}
				className={classes['base-input']}
			/>
		</>
	);
};

export default BaseInput;
