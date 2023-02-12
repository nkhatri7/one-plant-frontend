import useCountdown from './hooks/useCountdown';
import Header from './components/Header/Header';
import Plant from './components/Plant/Plant';
import Timer from './components/Timer/Timer';
import Mint from './components/Mint/Mint';
import Hint from './components/Hint/Hint';
import TreasureList from './components/TreasureList/TreasureList';
import Stats from './components/Stats/Stats';
import './App.scss';

const App = () => {
	const { minutes, seconds } = useCountdown();

	return (
		<div className="app">
			<Header />
			<Timer minutes={minutes} seconds={seconds} isPortrait={false} />
			<div className="landscape-hint-and-stats">
				<Hint isPortrait={false} />
				<Stats isPortrait={false} />
			</div>
			<Plant minutesLeft={minutes} secondsLeft={seconds} />
			<p className="water-plant-prompt">Water the plant</p>
			<Timer minutes={minutes} seconds={seconds} isPortrait={true} />
			<Mint />
			<Hint isPortrait={true} />
			<TreasureList />
			<Stats isPortrait={true} />
		</div>
	);
};

export default App;
