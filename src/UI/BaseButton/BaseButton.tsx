import classes from './basebutton.module.css';

interface IProps {
	text: string;
}

const BaseButton = ({ text }: IProps) => {
	return (
		<>
			<button className={classes['base-button']}>{text}</button>
		</>
	);
};

export default BaseButton;
