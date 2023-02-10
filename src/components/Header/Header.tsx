import ConnectWalletButton from '../ConnectWalletButton/ConnectWalletButton';
import OnePlantLogo from '../../assets/one-plant-logo.png';
import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className="header-row header-row--action-btns">
				<button className="more-info-btn" aria-label='More info'>
					<span className="hidden">More info</span>
				</button>
				<ConnectWalletButton />
			</div>
			<div className="header-row header-row--logo">
				<a href="/" className="header-logo-link">
					<img src={OnePlantLogo} alt="One Plant" className="logo" />
				</a>
			</div>
		</header>
	);
};

export default Header;