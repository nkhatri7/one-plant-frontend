import useCountdown from '../../hooks/useCountdown';
import { getTimeUnits, formatTimer } from '../../utils/time.utils';
import './Timer.scss';

type TimerProps = {
	totalSeconds: number,
	isPortrait: boolean,
};

const Timer = ({ totalSeconds, isPortrait }: TimerProps) => {
	const { minutes, seconds } = getTimeUnits(totalSeconds);
	const block = useCountdown(75, 12);

    return (
        <div className={`timer-container timer-container--${isPortrait ? 'portrait' : 'landscape'}`}>
			<p className={`countdown${minutes === 0 && seconds !== 0 ? ' countdown--red' : ''}`}>
				{formatTimer(minutes, seconds)}
			</p>
			<p className="current-block">Current Block: {block}</p>
		</div>
    );
};

export default Timer;