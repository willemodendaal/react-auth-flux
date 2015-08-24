import React from 'react'
import Router, {Route, RouteHandler } from 'react-router';
import RouterContainer from './services/routerContainer';
import Login from './components/loginComponent';
import Home from './components/homeComponent';

class App extends React.Component {
    render() {
        return (<div>
            [
            <RouteHandler/>
            ]
        </div>);
    }
}


class B1 extends React.Component {
    render() {
        return (<div>
            b1
        </div>);
    }
}

class B2 extends React.Component {
    render() {
        return (<div>
            b2
        </div>);
    }
}


//Configure routes
var routes = (
    <Route handler={App}>
        <Route name="login" handler={Login}/>
        <Route name="home" path="/" handler={Home}/>
    </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

router.run(function (Handler) {
    React.render(<Handler />, document.querySelector('.content'));
});
