import Treasure from '../Treasure/Treasure';
import Lock1 from '../../assets/lock-1.png';
import Lock2 from '../../assets/lock-2.png';
import Lock3 from '../../assets/lock-3.png';
import Lock4 from '../../assets/lock-4.png';
import './TreasureList.scss';

const TreasureList = () => {
	const lockImages: string[] = [
		Lock1, Lock2, Lock3, Lock4, Lock2, Lock1, Lock3, Lock4, Lock2, Lock3,
		Lock2, Lock1, Lock4, Lock3, Lock1, Lock3,
	];

	const treasureList = lockImages.map((lockImg, idx) => (
		<Treasure key={idx} treasureNum={idx + 1} lockImgPath={lockImg} />
	));

	return (
		<div className="treasure-list-container">
			<p className="treasure-list-heading">Treasure Discovered</p>
			<div className="treasure-list">
				{treasureList}
			</div>
		</div>
	);
};

export default TreasureList;