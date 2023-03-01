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
	 * Calls provided onclick function.
	 */
	const handleMintBtnClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<div className="mint-btn-container">
			<button 
					className={`mint-btn${isModal ? ' mint-btn--modal' : ''}`} 
					aria-label="Mint" 
					type='button'
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