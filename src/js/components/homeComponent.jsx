import React from 'react';
import AuthenticatedComponent from 'authenticatedComponent';



%%%   todo. Implement routing. Don't think transitions will work yet.


//Wrap 'Home' in 'AuthenticatedComponent'. It will only render if
//  user is authenticated. Otherwise user will be redirected to login.
export default AuthenticatedComponent(
    class Home extends React.Component {
        render() {
            return (<h1>Home page. Welcome: {this.props.username}</h1>);
        }
    }
);