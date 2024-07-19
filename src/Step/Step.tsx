import React, { useState } from 'react';
import { IStep } from '../IStep';
import IconButton from '../UI/IconButton/IconButton';
import VoidInput from '../UI/VoidInput/VoidInput';
import classes from './step.module.css';

interface IProps {
	step: IStep;
	removeStep: (date: string) => void;
	updateStep: (
		type: string,
		newData: { date: string; data: string | number }
	) => void;
}

const Step = ({ step, removeStep, updateStep }: IProps) => {
	const [isDisabled, setIsDisabled] = useState(true);

	return (
		<>
			<div className={classes['step']}>
				<VoidInput
					id='date'
					name='date'
					type='text'
					value={step.date}
					required={false}
					disabled={isDisabled}
					change={(e: React.ChangeEvent<HTMLInputElement>) => {
						const data = e.target.value;
						const date = step.date;
						updateStep('date', { date, data });
					}}
					min={0}
				></VoidInput>

				<VoidInput
					id='distance'
					name='distance'
					type='number'
					value={step.distance}
					required={false}
					disabled={isDisabled}
					change={(e: React.ChangeEvent<HTMLInputElement>) => {
						const data = +e.target.value;
						const date = step.date;
						updateStep('distance', { date, data });
					}}
					min={0}
				></VoidInput>

				<div>
					<IconButton
						icon='edit'
						click={() => {
							setIsDisabled(edit => !edit);
						}}
					></IconButton>
					<IconButton
						icon='delete'
						click={() => {
							removeStep(step.date);
						}}
					></IconButton>
				</div>
			</div>
		</>
	);
};

export default Step;
