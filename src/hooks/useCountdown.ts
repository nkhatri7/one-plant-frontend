import { useState, useEffect } from 'react';

// Max time for plant is 15 minutes (15 x 60 seconds)
const MAX_TIME_LEFT = 15 * 60;

/**
 * Decreases the time left from the maximum plant life cycle (15 minutes)
 * every second.
 * @returns The total seconds left.
 */
const useCountdown = (): number => {
    const [timeLeft, setTimeLeft] = useState(MAX_TIME_LEFT);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(prev => prev - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    return timeLeft;
};

export default useCountdown;