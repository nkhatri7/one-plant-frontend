import { useState, useEffect } from 'react';
import { getTimeUnits } from '../utils/time.utils';

type CountdownUnits = {
    minutes: number,
    seconds: number,
};

// Max time for plant is 15 minutes (15 x 60 seconds)
const MAX_TIME_LEFT = 15 * 60;

/**
 * Decreases the time left from the maximum plant life cycle (15 minutes)
 * every second.
 * @returns The number of minutes and seconds left.
 */
const useCountdown = (): CountdownUnits => {
    const [timeLeft, setTimeLeft] = useState(MAX_TIME_LEFT);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(prev => prev - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const { minutes, seconds } = getTimeUnits(timeLeft);
    return {
        minutes: minutes,
        seconds: seconds,
    };
};

export default useCountdown;