import React from "react";
import {Login} from "../../actions";

class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render () {
        const { email, password } = this.state;
        const login = () => Login({ email, password });

        return <div>
            <div className="row">
                <input
                    value={email}
                    placeholder="email"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    value={password}
                    placeholder="passwort"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button onClick={login}>LOGIN</button>
            </div>
        </div>;
    }
}

class Welcome extends React.Component {
    render() {
        const { user, ideas } = this.props;

        return <div>Willkommen, {user.email}. Aktuell sind {ideas.length} Ideen registriert.</div>;
    }
}

export default class Home extends React.Component {
    render() {
        const { user, ideas } = this.props;
        const View = user == null ? LoginForm : Welcome;

        return <div className="home">
            <div className="panel">
                <h3>Home</h3>
                <View user={user} ideas={ideas} />
            </div>
        </div>;
    }
}