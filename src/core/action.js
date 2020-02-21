export default () => {
    const listeners = [];

    const instance = (...args) => {
        listeners.map(listener => listener(...args));
    };

    instance.register = (listener) => {
        listeners.push(listener);
    };

    return instance;
};