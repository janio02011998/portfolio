import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Contact from '../pages/Contact';
import Timeline from '../pages/Timeline';
import About from '../pages/About';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/timeline' exact component={Timeline} />
            <Route path='/about' exact component={About}/>
        </Switch>
    );
}