const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd HH:mm:ss';
const TODO_STATES = ["TODO", "PROGRESS", "COMPLETED"];

const TODO_STATE = (() => {
    let states = {};
    for (const state of TODO_STATES) {
        states[state] = state;
    }
    return Object.freeze(states);
})();

export { DEFAULT_DATE_FORMAT, TODO_STATE };