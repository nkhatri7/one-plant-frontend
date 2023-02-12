import PlantDead from '../../assets/plant-dead.png';
import PlantInterval3 from '../../assets/plant-3min.gif';
import PlantInterval6 from '../../assets/plant-6min.gif';
import PlantInterval9 from '../../assets/plant-9min.gif';
import PlantInterval12 from '../../assets/plant-12min.gif';
import PlantInterval15 from '../../assets/plant-15min.gif';
import './Plant.scss';

type PlantProps = {
	minutesLeft: number,
	secondsLeft: number,
};

const Plant = ({ minutesLeft, secondsLeft}: PlantProps) => {
	/**
	 * Gets the appropriate plant image based on the time that's left.
	 * @returns The path to the appropriate image.
	 */
	const getPlantImage = (): string => {
		if (minutesLeft === 0 && secondsLeft === 0) {
			return PlantDead;
		} else if (minutesLeft < 3) {
			return PlantInterval3;
		} else if (minutesLeft < 6) {
			return PlantInterval6;
		} else if (minutesLeft < 9) {
			return PlantInterval9;
		} else if (minutesLeft < 12) {
			return PlantInterval12;
		} else {
			return PlantInterval15;
		}
	};

	return (
		<div className="plant-container">
			<img src={getPlantImage()} alt="Plant" className="plant" />
		</div>
	);
};

export default Plant;