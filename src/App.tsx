import { useState } from 'react';
import { ConnectKitButton } from 'connectkit';
import useCountdown from './hooks/useCountdown';
import Header from './components/Header/Header';
import Plant from './components/Plant/Plant';
import Timer from './components/Timer/Timer';
import Hint from './components/Hint/Hint';
import TreasureList from './components/TreasureList/TreasureList';
import Stats from './components/Stats/Stats';
import MintButton from './components/MintButton/MintButton';
import Notepad from './components/Notepad/Notepad';
import MintModal from './components/MintModal/MintModal';
import MobileBg from './assets/mobile-bg.png';
import TabletBg from './assets/tablet-bg.png';
import DesktopBg from './assets/desktop-bg.png';
import './App.scss';

const App = () => {
	const [isNotepadOpen, setNotepadOpen] = useState(false);
	const [isMintModalOpen, setMintModalOpen] = useState(false);
	const totalSeconds = useCountdown();

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
			<main>
				<Timer totalSeconds={totalSeconds} isPortrait={false} />
				<div className="landscape-hint-and-stats">
					<Hint isPortrait={false} />
					<Stats isPortrait={false} />
				</div>
				<Plant totalSeconds={totalSeconds} />
				<p className="water-plant-prompt">{totalSeconds === 0 ? 'Game Over' : 'Water the plant'}</p>
				<Timer totalSeconds={totalSeconds} isPortrait={true} />
				<ConnectKitButton.Custom>
					{({ isConnected, show }) => (
						<MintButton 
							isModal={false} 
							disabled={totalSeconds === 0} 
							onClick={isConnected ? displayMintModal : show} 
						/>
					)}
				</ConnectKitButton.Custom>
				<Hint isPortrait={true} />
				<TreasureList />
				<Stats isPortrait={true} />
			</main>
			<div className="bg-container">
				<img src={MobileBg} alt="Background" className="bg bg--mobile" />
				<img src={TabletBg} alt="Background" className="bg bg--tablet" />
				<img src={DesktopBg} alt="Background" className="bg bg--desktop" />
			</div>
			{isNotepadOpen && <Notepad closeNotepad={closeNotepad} />}
			{isMintModalOpen && <MintModal closeModal={closeMintModal} />}
		</div>
	);
};

export default App;
