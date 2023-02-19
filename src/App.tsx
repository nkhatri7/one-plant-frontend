import { useState } from 'react';
import useCountdown from './hooks/useCountdown';
import Header from './components/Header/Header';
import Plant from './components/Plant/Plant';
import Timer from './components/Timer/Timer';
import Hint from './components/Hint/Hint';
import TreasureList from './components/TreasureList/TreasureList';
import Stats from './components/Stats/Stats';
import Notepad from './components/Notepad/Notepad';
import MintModal from './components/MintModal/MintModal';
import './App.scss';

const App = () => {
	const [isNotepadOpen, setNotepadOpen] = useState(false);
	const [isMintModalOpen, setMintModalOpen] = useState(false);
	const { minutes, seconds } = useCountdown();

	/**
	 * Displays the notepad modal.
	 */
	const displayNotepad = () => {
		setNotepadOpen(true);
		// Prevent scrolling
		document.body.style.overflow = 'hidden';
	};

	/**
	 * Closes the notepad modal.
	 */
	const closeNotepad = () => {
		setNotepadOpen(false);
		document.body.style.overflow = '';
	};

	/**
	 * Displays the mint modal.
	 */
	const displayMintModal = () => {
		setMintModalOpen(true);
		// Prevent scrolling
		document.body.style.overflow = 'hidden';
	};

	/**
	 * Closes the mint modal.
	 */
	const closeMintModal = () => {
		setMintModalOpen(false);
		document.body.style.overflow = '';
	};

	return (
		<div className="app">
			<Header displayNotepad={displayNotepad} />
			<Timer minutes={minutes} seconds={seconds} isPortrait={false} />
			<div className="landscape-hint-and-stats">
				<Hint isPortrait={false} />
				<Stats isPortrait={false} />
			</div>
			<Plant minutesLeft={minutes} secondsLeft={seconds} />
			<p className="water-plant-prompt">Water the plant</p>
			<Timer minutes={minutes} seconds={seconds} isPortrait={true} />
			<div className="mint-btn-container">
				<button className="mint-btn" aria-label="Mint" onClick={displayMintModal}>
					<span className="hidden">Mint</span>
				</button>
			</div>
			<Hint isPortrait={true} />
			<TreasureList />
			<Stats isPortrait={true} />
			{isNotepadOpen && <Notepad closeNotepad={closeNotepad} />}
			{isMintModalOpen && <MintModal closeModal={closeMintModal} />}
		</div>
	);
};

export default App;
