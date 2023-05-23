
/**
 * makes a delay on callback function and returns the setTimeout ID
 * @param {function} callback
 * @param {number} timer
 * @returns {number}
 */
const debounce = (callback: () => void, timer: number): NodeJS.Timeout => {
    return setTimeout(callback, timer);
};

export default debounce;
