import { useState, useEffect } from 'react';

// Max time for plant is 15 minutes (15 x 60 seconds)
const MAX_TIME_LEFT = 15 * 60;

const useCountdown = () => {
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