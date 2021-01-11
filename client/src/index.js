import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Homepage}/>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
