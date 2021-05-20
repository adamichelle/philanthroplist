import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from "../pages/Landing";
import Charities from "../pages/Charities";

function Main(props) {
    const { getNavType } = props;

    return(
        <Switch>
            <Route exact path='/' render={(props) => <Landing {...props} title={'landing'} getNavType={getNavType} />} />
            <Route exact path="/charities" render={(props) =>  <Charities {...props} title={'charities'} getNavType={getNavType} />} />
        </Switch>
    )
}

export default Main;