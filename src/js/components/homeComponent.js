import React from 'react';
import AuthenticatedComponent from './authenticatedComponent';
import LoginActions from '../actions/loginActions';

//Wrap 'Home' in 'AuthenticatedComponent'. It will only render if
//  user is authenticated. Otherwise user will be redirected to login.
export default AuthenticatedComponent(
    class Home extends React.Component {

        logoff() {
            LoginActions.logoff();
        }

        render() {
            return (<div>
                    <h1>Home page. Welcome: {this.props.username}</h1>
                    <button onClick={ this.logoff }>Logoff</button>
                </div>);
        }
    }
);