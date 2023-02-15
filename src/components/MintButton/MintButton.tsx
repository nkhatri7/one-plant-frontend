import './MintButton.scss';

const MintButton = () => {
    return (
		<div className="mint-btn-container">
			<button className="mint-btn" aria-label="Mint">
				<span className="hidden">Mint</span>
			</button>
		</div>
    );
};

export default MintButton;