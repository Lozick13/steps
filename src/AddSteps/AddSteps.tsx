import React, { useState } from 'react';
import { IStep } from '../IStep';
import BaseButton from '../UI/BaseButton/BaseButton';
import BaseInput from '../UI/BaseInput/BaseInput';
import classes from './addsteps.module.css';

interface IProps {
	addStep: (newStep: IStep) => void;
}

const AddSteps = ({ addStep }: IProps) => {
	const [date, setDate] = useState<string>('2022-01-01');
	const [distance, setDistance] = useState<number>(0);

	const handleAddStep = (e: React.FormEvent) => {
		e.preventDefault();
		addStep({ date, distance });
		setDate('');
		setDistance(0);
	};

	return (
		<form onSubmit={handleAddStep} className={classes['add-steps']}>
			<div className={classes['add-steps__container']}>
				<span>Дата (ДД.ММ.ГГ)</span>
				<BaseInput
					id='date'
					name='date'
					type='text'
					value={date}
					required={true}
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						setDate(e.target.value)
					}
				/>
			</div>
			<div className={classes['add-steps__container']}>
				<span>Пройдено км</span>
				<BaseInput
					id='distance'
					name='distance'
					type='number'
					value={distance}
					required={true}
					min={0}
					change={(e: React.ChangeEvent<HTMLInputElement>) =>
						setDistance(parseInt(e.target.value))
					}
				/>
			</div>

			<BaseButton text='ОК' />
		</form>
	);
};

export default AddSteps;
