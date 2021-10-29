import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "./routes";

import Landing from "../views/Landing";
import Search from "../views/Search";
import Course from "../views/Course";
import Colleges from "../views/Colleges";
import Profile from "../views/Profile";
import Error from "../views/Error";
import { loginUser } from "../services/user.service";

export default function Main() {
    useEffect(() => {
        const test = async () => {
            let data = await loginUser("anjyakindipe@gmail.com", "anjola");
            return data;
        };

        console.log(test());
    }, []);
    return (
        <Switch>
            <Route exact path={ROUTES.HOME} component={Landing} />
            <Route exact path={ROUTES.SEARCH} component={Search} />
            <Route exact path={ROUTES.COURSE} component={Course} />
            <Route exact path={ROUTES.COLLEGES} component={Colleges} />
            <Route exact path={ROUTES.PROFILE} component={Profile} />

            {/* This Route should always be at the bottom of all routes */}
            <Route exact path="*" component={Error} />
        </Switch>
    );
}
