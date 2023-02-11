import PlantDead from '../../assets/plant-dead.png';
import PlantInterval3 from '../../assets/plant-3min.gif';
import PlantInterval6 from '../../assets/plant-6min.gif';
import PlantInterval9 from '../../assets/plant-9min.gif';
import PlantInterval12 from '../../assets/plant-12min.gif';
import PlantInterval15 from '../../assets/plant-15min.gif';
import './Plant.scss';

type PlantProps = {
	minutesLeft: number,
};

const Plant = ({ minutesLeft }: PlantProps) => {
	const getPlantImage = (): string => {
		let image;
		if (minutesLeft > 12) {
			image = PlantInterval15;
		} else if (minutesLeft > 9) {
			image = PlantInterval12;
		} else if (minutesLeft > 6) {
			image = PlantInterval9;
		} else if (minutesLeft > 3) {
			image = PlantInterval6;
		} else if (minutesLeft > 0) {
			image = PlantInterval3;
		} else {
			image = PlantDead;
		}
		return image;
	};

	return (
		<div className="plant-container">
			<img src={getPlantImage()} alt="Plant" className="plant" />
		</div>
	);
};

export default Plant;