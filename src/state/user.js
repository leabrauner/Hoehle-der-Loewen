import {Login} from "../actions";
import {http} from "../core/http";

export default ({ init, on, update }) => {

    init({ user: null });

    on(Login, (state, credentials) => {
        // http.post('user/login', credentials).then(result => {
        //    const user = result.data !== ''  ? result.data : null;
        //    update({ user });
        // });

        if (credentials.email === 'lea' && credentials.password === 'test') {
            update({ user: credentials });
        }
    });

}