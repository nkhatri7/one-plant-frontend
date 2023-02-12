import BevelOverlay from '../../assets/bevel-overlay.png';
import './Treasure.scss';

type TreasureProps = {
	treasureNum: number,
	lockImgPath: string,
};

const Treasure = ({ treasureNum, lockImgPath }: TreasureProps) => {
	return (
		<div className="treasure">
			<img src={BevelOverlay} alt="Bevel" className="bevel-overlay" />
			<img src={lockImgPath} alt="Lock" className="lock-img" />
		</div>
	);
};

export default Treasure;