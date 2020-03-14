import {Login} from "../actions";
import {http} from "../core/http";

export default ({init, on, update}) => {

    init({user: null});

    on(Login, (state, credentials) => {
        http.post('user/login', credentials).then(result => {
            const {user, error} = result.data;

            if (!user && !error) {
                update({user: null, error: 'Ungültige Zugangsdaten'});
            } else {
                update({user, error});
            }
        });
    });

}