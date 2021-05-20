import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from "../pages/Landing";

function Main(props) {
    const { getNavType } = props;

    return(
        <Switch>
            <Route exact path='/' render={(props) => <Landing {...props} title={'landing'} getNavType={getNavType} />} />
        </Switch>
    )
}

export default Main;