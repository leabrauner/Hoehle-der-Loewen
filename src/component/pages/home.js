import React from "react";

export default class Home extends React.Component{
    render() {
        return <div className="home">
            <div class="panel">
                <h3>Home</h3>
                <form>
                    <div className="row">
                        <input placeholder="benutzername"/>
                        <input placeholder="passwort"/>
                        <button>LOGIN</button>
                    </div>
                </form>
            </div>


        </div>;
    }
}