import React from 'react'
import Router, {Route, RouterHandler } from 'react-router';
import RouterContainer from './services/routerContainer';
import Login from './components/loginComponent';
import Home from './components/homeComponent';

class App extends React.Component {
    render() {
        return (<div>
            <RouteHandler/>
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

router.run(function (handler) {
    React.render(<handler />, document.getElementById('content'));
});
