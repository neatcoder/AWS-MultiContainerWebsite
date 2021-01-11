import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap";

class Navbar extends React.Component {
    handleLogOut() {
        console.log("here");
        window.localStorage.clear();
        alert("You are now logged out");
        window.location.reload(false);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <a className="navbar-brand" href="/search">
                    Company Z
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Search Job
                            </a>
                        </li>
                        <li className="nav-item">
                            <Button
                                className="nav-link"
                                variant="outline-dark"
                                onClick={this.handleLogOut}
                            >
                                Log Out
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
