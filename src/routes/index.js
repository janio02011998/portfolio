import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../pages/Main';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={() => (<Redirect to='/portfolio' />)} />
            <Route path='/portfolio' exact component={Main} />
        </Switch>
    );
}