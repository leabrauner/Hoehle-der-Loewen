export default (handlers) => {
    const state = {};
    const listeners = [];

    const init = (partial) => {
        Object.keys(partial).map(key => state[key] = partial[key]);
    };

    const on = (action, callback) => {
        action.register(actionResult => {
            callback(state, actionResult);
        });
    };

    const update = (partial) => {
        init(partial);
        notify();
    };

    const notify = () => {
        listeners.map(listener => listener(state));
    };

    const observe = (listener) => {
        listeners.push(listener);
        notify();
    };

    handlers.map(handler => handler({ init, on, update }));

    return { observe };
}