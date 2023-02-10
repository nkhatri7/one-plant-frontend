import { ConnectKitButton } from 'connectkit';
import ConnectWalletIcon from '../../assets/connect-wallet-icon.png';
import './ConnectWalletButton.scss';

const ConnectWalletButton = () => {
	return (
		<ConnectKitButton.Custom>
			{({ isConnected, show, truncatedAddress, ensName }) => (
				<button className="connect-wallet-btn" onClick={show}>
					<img src={ConnectWalletIcon} alt="" className="connect-wallet-btn-icon" />
					{isConnected ? ensName ?? truncatedAddress : "CONNECT WALLET"}
				</button>
			)}
		</ConnectKitButton.Custom>
	);
};

export default ConnectWalletButton;