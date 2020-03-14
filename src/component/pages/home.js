import React from "react";
import {Login} from "../../actions";
import {PAWS} from "../../constants";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const {email, password} = this.state;
        const login = () => Login({email, password});

        return <div className="login">
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

class Paw extends React.Component {
    render() {
        const {paw, select} = this.props;

        return <div className="paw" onClick={() => select(paw)}>
            <img src={paw.image}/>
            <span>{paw.title}</span>
        </div>;
    }
}

class Welcome extends React.Component {
    render() {
        const {user, ideas} = this.props;

        return <div className="welcome">
            Willkommen, {user.email}. Aktuell sind {ideas.length} Ideen registriert.
        </div>;
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paw: PAWS.A
        };
    }

    render() {
        const {paw} = this.state;
        const {user, ideas} = this.props;
        const View = user == null ? LoginForm : Welcome;

        const select = paw => this.setState(({paw}));

        const elements = Object.keys(PAWS).map(key => PAWS[key]).map((paw, i) => <Paw
            key={i} paw={paw} select={select}
        />);

        return <div className="home">
            <div className="panel">
                <h3>Home</h3>
                <View user={user} ideas={ideas}/>
                <div className="info">
                    <div className="paws">
                        {elements}
                    </div>
                    <div className="text">
                        {paw.text}
                    </div>
                </div>
            </div>
        </div>;
    }
}