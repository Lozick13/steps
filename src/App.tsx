import './App.css';
import Steps from './Steps/Steps';

function App() {
	const steps = [
		{
			date: '2022-01-01',
			distance: 1000,
		},
	];

	return (
		<>
			<Steps steps={steps}></Steps>
		</>
	);
}

export default App;
