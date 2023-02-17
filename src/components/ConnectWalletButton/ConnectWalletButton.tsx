import { ConnectKitButton } from 'connectkit';
import ConnectWalletIcon from '../../assets/connect-wallet-icon.png';
import './ConnectWalletButton.scss';

const ConnectWalletButton = () => {
	return (
		<ConnectKitButton.Custom>
			{({ isConnected, show, truncatedAddress, ensName }) => (
				<button className="connect-wallet-btn" onClick={show}>
					{isConnected ? ensName ?? truncatedAddress : "CONNECT WALLET"}
					<img src={ConnectWalletIcon} alt="" className="connect-wallet-btn-icon" />
				</button>
			)}
		</ConnectKitButton.Custom>
	);
};

export default ConnectWalletButton;