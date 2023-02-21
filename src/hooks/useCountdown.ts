import { useState, useEffect } from 'react';

/**
 * Decreases the given maximum value by 1 unit with the given interval time.
 * @param initialValue The value the countdown starts with.
 * @param intervalTime The number of seconds between each decrement.
 * @returns The remaining value.
 */
const useCountdown = (initialValue: number, intervalTime: number): number => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            if (value > 0) {
                setValue(prev => prev - 1);
            }
        }, (intervalTime * 1000));

        return () => clearInterval(interval);
    }, [value]);

    return value;
};

export default useCountdown;