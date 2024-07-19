import { useState } from 'react';
import AddSteps from '../AddSteps/AddSteps';
import { IStep } from '../IStep';
import StatsSteps from '../StatsSteps/StatsSteps';
import classes from './steps.module.css';

const Steps = ({ steps }: { steps: IStep[] }) => {
	const [stepsState, setStepsState] = useState<IStep[]>(steps);

	const addStep = (newStep: IStep) => {
		setStepsState(prevSteps => {
			const existingStep = prevSteps.find(step => step.date === newStep.date);

			if (existingStep) {
				const updatedSteps = prevSteps.map(step =>
					step.date === newStep.date
						? { ...step, distance: step.distance + newStep.distance }
						: step
				);

				return updatedSteps;
			}

			return [...prevSteps, newStep];
		});
	};

	const updateStep = (
		type: string,
		newData: { date: string; data: string | number }
	) => {
		switch (type) {
			case 'date':
				setStepsState(prevSteps =>
					prevSteps.map(step =>
						step.date === newData.date
							? { ...step, date: '' + newData.data }
							: step
					)
				);
				break;
			case 'distance':
				setStepsState(prevSteps =>
					prevSteps.map(step =>
						step.date === newData.date
							? { ...step, distance: +newData.data }
							: step
					)
				);
				break;
		}
	};

	const removeStep = (date: string) => {
		setStepsState(prevSteps => prevSteps.filter(step => step.date !== date));
	};

	return (
		<>
			<div className={classes['steps']}>
				<AddSteps addStep={addStep}></AddSteps>
				<StatsSteps
					updateStep={updateStep}
					steps={stepsState}
					removeStep={removeStep}
				></StatsSteps>
			</div>
		</>
	);
};

export default Steps;
