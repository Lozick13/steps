import { IStep } from '../IStep';
import Step from '../Step/Step';
import classes from './statssteps.module.css';

interface IProps {
	steps: IStep[];
	updateStep: (
		type: string,
		newData: { date: string; data: string | number }
	) => void;
	removeStep: (date: string) => void;
}

const StatsSteps = ({ steps, updateStep, removeStep }: IProps) => {
	return (
		<>
			<div className={classes['stats-steps']}>
				<div className={classes['stats-steps__label']}>
					<span>Дата (ДД.ММ.ГГ)</span>
					<span>Пройдено км</span>
					<span>Действия</span>
				</div>
				<div className={classes['stats-steps__main']}>
					{steps.map((step, index) => (
						<Step
							key={index}
							step={step}
							updateStep={updateStep}
							removeStep={removeStep}
						></Step>
					))}
				</div>
			</div>
		</>
	);
};

export default StatsSteps;
