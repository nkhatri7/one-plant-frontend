import useCountdown from './hooks/useCountdown';
import Header from './components/Header/Header';
import Plant from './components/Plant/Plant';
import Timer from './components/Timer/Timer';
import Mint from './components/Mint/Mint';
import Hint from './components/Hint/Hint';
import './App.scss';

const App = () => {
	const { minutes, seconds } = useCountdown();

	return (
		<div className="app">
			<Header />
			<Timer minutes={minutes} seconds={seconds} isPortrait={false} />
			<Plant minutesLeft={minutes} secondsLeft={seconds} />
			<p className="water-plant-prompt">Water the plant</p>
			<Timer minutes={minutes} seconds={seconds} isPortrait={true} />
			<Mint />
		</div>
	);
};

export default App;
