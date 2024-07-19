import { IInput } from '../IInput';
import classes from './voidinput.module.css';

const VoidInput = ({
	id,
	name,
	value,
	type,
	change,
	min,
	required,
	disabled,
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
				disabled={disabled}
				className={classes['void-input']}
			/>
		</>
	);
};

export default VoidInput;
