import { formatTimer } from '../../utils/time.utils';
import './Timer.scss';

type TimerProps = {
	minutes: number,
	seconds: number,
	isPortrait: boolean,
};

const Timer = ({ minutes, seconds, isPortrait }: TimerProps) => {
    return (
        <div className={`timer-container timer-container--${isPortrait ? 'portrait' : 'landscape'}`}>
			<p className={`countdown${minutes === 0 && seconds !== 0 ? ' countdown--red' : ''}`}>
				{formatTimer(minutes, seconds)}
			</p>
			<p className="current-block">Current Block: 75</p>
		</div>
    );
};

export default Timer;