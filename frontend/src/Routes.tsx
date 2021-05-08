import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import DashBoard from "./pages/Dashboard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard" exact>
                    <DashBoard />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
