import React from 'react'
import Router, {Route} from 'react-router';
import RouterContainer from './components/routerContainer';
import Login from './components/loginComponent';
import Home from './components/homeComponent';

//Configure routes
var routes = (
    <Route handler={AuthenticatedApp}>
        <Route name="login" handler={Login}/>
        <Route name="home" path="/" handler={Home}/>
    </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

router.run(function (handler) {
    React.render(<handler />, document.getElementById('content'));
});
