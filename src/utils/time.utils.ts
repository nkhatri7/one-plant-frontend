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
 * Formats the given total seconds to show the time in the format of
 * hours:minutes:seconds or minutes:seconds.
 * @param totalSeconds The total seconds from a timer.
 * @param showHours Whether hours should be shown.
 * @returns A string with the formatted time.
 */
const formatTime = (totalSeconds: number, showHours: boolean): string => {
    const { hours, minutes, seconds } = getTimeUnits(totalSeconds);
    const timeString = `${formatNumber(minutes)}:${formatNumber(seconds)}`;
    if (showHours) {
        return `${formatNumber(hours)}:${timeString}`;
    } else {
        return timeString;
    }
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

export { getTimeUnits, formatTime };