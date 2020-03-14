import React from "react";
import {Login} from "../../../actions";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const{error} = this.props;
        const {email, password} = this.state;
        const login = () => Login({email, password});
        const hidden = error ? 'hidden' : '';

        return <div className="login">
            <div className={`row ${hidden}`}>
                <div className="error">{error}</div>
            </div>
            <div className="row">
                <input
                    value={email}
                    placeholder="email"
                    onChange={e => this.setState({email: e.target.value})}
                />
                <input
                    value={password}
                    placeholder="passwort"
                    onChange={e => this.setState({password: e.target.value})}
                />
                <button onClick={login}>LOGIN</button>
            </div>
        </div>;
    }
}