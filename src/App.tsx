import useCountdown from './hooks/useCountdown';
import Header from './components/Header/Header';
import Plant from './components/Plant/Plant';
import './App.scss';

const App = () => {
	const { minutes, seconds } = useCountdown();

	return (
		<div className="app">
			<Header />
			<Plant minutesLeft={minutes} />
		</div>
	);
};

export default App;
