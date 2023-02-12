import './Stats.scss';

type StatsProps = {
	isPortrait: boolean,
};

const Stats = ({ isPortrait }: StatsProps) => {
	return (
		<div className={`stats stats--${isPortrait ? 'portrait' : 'landscape'}`}>
			<p className="stat">
				Plant Lifespan:&nbsp;
				<span className="stat--value">XX:XX:XX</span>
			</p>
			<p className="stat">
				Treasure Found:&nbsp;
				<span className="stat--value">XX,XXX</span>
			</p>
		</div>
	);
};

export default Stats;