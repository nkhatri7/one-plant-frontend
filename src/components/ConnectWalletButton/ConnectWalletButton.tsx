import ConnectWalletIcon from '../../assets/connect-wallet-icon.png';
import './ConnectWalletButton.scss';

const ConnectWalletButton = () => {
	return (
		<button className="connect-wallet-btn">
			<img src={ConnectWalletIcon} alt="" className="connect-wallet-btn-icon" />
			CONNECT WALLET
		</button>
	);
};

export default ConnectWalletButton;