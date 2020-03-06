import React from "react";

export default class Home extends React.Component{
    render() {
        return <div className="home">
            <div className="panel">
                <h3>Home</h3>
                <form>
                    <div className="row">
                        <label>E-Mail</label>
                        <input />
                    </div>
                    <div className="row">
                        <label>Passwort</label>
                        <input />
                    </div>
                    <div className="row">
                        <label></label>
                        <button>Senden</button>
                    </div>
                </form>
            </div>
        </div>;
    }
}