import React from 'react';
import Router, {Route, RouteHandler } from 'react-router';
import RouterContainer from './services/routerContainer';
import Login from './components/loginComponent';
import Home from './components/homeComponent';
import LoginActions from './actions/loginActions';

class App extends React.Component {
    render() {
        return (<div>
            <RouteHandler/>
        </div>);
    }
}

//Configure routes
let routes = (
    <Route handler={App}>
        <Route name="login" handler={Login}/>
        <Route name="home" path="/" handler={Home}/>
    </Route>
);

let router = Router.create({routes});
RouterContainer.set(router);

router.run(function (Handler) {
    React.render(<Handler />, document.querySelector('.content'));
});

//Login user if logged in previously.
let token = localStorage.getItem('token');
if (token) {
    LoginActions.loginUser(token);
}
