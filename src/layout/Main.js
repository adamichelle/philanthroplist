import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import Charities from '../pages/Charities';
import Charity from '../pages/Charity';

function Main(props) {
    const { getNavType } = props;

    return(
        <Switch>
            <Route exact path='/' render={(props) => <Landing {...props} title={'landing'} getNavType={getNavType} />} />
            <Route exact path="/charities" render={(props) =>  <Charities {...props} title={'charities'} withSelectedAreaOfFocus={false} getNavType={getNavType} />} />
            <Route path="/charities/:charityId" render={(props) => <Charity {...props} title={'charity'} getNavType={getNavType} />} />
            <Route path="/area-of-focus/:areaOfFocusName" render={(props) => <Charities {...props} title={'charities'} withSelectedAreaOfFocus={true} getNavType={getNavType} />} />
        </Switch>
    )
}

export default Main;