import Axios from 'axios';

const URL = 'http://localhost:8090/hdl/';

export const http = Axios.create({
    baseURL: URL,
    timeout: 3000
});

export const sse = (url, callback) => {
    const source = new EventSource(URL + 'idea/sse');

    source.onerror = error => console.log('Error on', url, ':', error)
    source.onmessage = event => callback(event);
};

