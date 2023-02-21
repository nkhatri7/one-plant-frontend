import { useRef } from 'react';
import './MintButton.scss';

type MintButtonProps = {
	isModal: boolean,
	disabled: boolean,
	onClick?: Function,
};

const MintButton = ({ isModal, disabled, onClick }: MintButtonProps) => {
	const mintBtn = useRef<HTMLButtonElement>(null);
		
	/**
	 * Shows the button animation and calls the necessary function.
	 */
	const handleMintBtnClick = () => {
		showMintBtnAnimation();
		if (onClick) {
			onClick();
		}
	};

	/**
	 * Adds class to mint button to show pressed animation.
	 */
	const showMintBtnAnimation = () => {
		// Show mint button pressed image
		mintBtn.current?.classList.add('mint-btn--pressed');
		// Go back to unpressed image after a second
		setTimeout(() => {
			mintBtn.current?.classList.remove('mint-btn--pressed');
		}, 200);
	};

	return (
		<div className="mint-btn-container">
			<button 
					className={`mint-btn${isModal ? ' mint-btn--modal' : ''}`} 
					aria-label="Mint" 
					type={isModal ? 'submit' : 'button'}
					onClick={handleMintBtnClick} 
					disabled={disabled}
					ref={mintBtn}
			>
				<span className="hidden">Mint</span>
			</button>
		</div>
	);
};

export default MintButton;