type TimeUnits = {
    hours: number,
    minutes: number,
    seconds: number,
};

/**
 * Gets the hours, minutes, and seconds from the given `totalSeconds`.
 * @param totalSeconds The total seconds from a timer.
 * @returns An object with the hours, minutes, and seconds from the given time.
 */
const getTimeUnits = (totalSeconds: number): TimeUnits => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
};

/**
 * Formats the given time units into a string in the format of `mm:ss`.
 * @param minutes The minutes in a counter or countdown.
 * @param seconds The seconds in a counter or countdown.
 * @returns A string in the format of `mm:ss`.
 */
const formatTimer = (minutes: number, seconds: number): string => {
    return `${formatNumber(minutes)}:${formatNumber(seconds)}`;
};

/**
 * Formats the given time units into a string in the format of `hh:mm:ss`.
 * @param timeUnits The hours, minutes, and seconds from a counter or countdown.
 * @returns A string in the format of `hh:mm:ss`.
 */
const formatLifespan = (timeUnits: TimeUnits): string => {
    const { hours, minutes, seconds } = timeUnits;
    const minutesAndSeconds = formatTimer(minutes, seconds);
    return `${formatNumber(hours)}:${minutesAndSeconds}`;
};

/**
 * Formats the given number by adding a 0 in front of the number if it is a
 * single digit number.
 * 
 * NOTE: Only **positive integers** should be used with this function.
 * @param num A positive integer.
 * @returns A formatted string of the given number.
 */
const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
};

export { getTimeUnits, formatTimer, formatLifespan };