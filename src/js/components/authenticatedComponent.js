//Wraps other components. User must be authenticated, otherwise this
//  component will redirect the user to the logon page.
//Component uses data from login store.
import React from 'react';
import LoginStore from '../stores/loginStore';

export default (ComposedComponent) => {
    return class AuthenticatedComponent extends React.Component {

        static willTransitionTo(transition) {
            //React-Router method that is called before transitioning to this component.
            //Send user to login page if not logged in.
            if (!LoginStore.isLoggedIn()) {
                transition.redirect('/login');
            }
        }

        constructor() {
            super();
            this.state = this._getLoginState();
        }

        _getLoginState() {
            return {
                userLoggedIn: LoginStore.isLoggedIn(),
                username: LoginStore.username,
                token: LoginStore.token
            };
        };

        componentDidMount() {
            //Subscribe to events from store.
            LoginStore.addChangeListener(this._onChange.bind(this));
        }

        //Update component state after any change in store.
        _onChange() {
            this.setState(this._getLoginState());
        }

        //Clean up after ourselves.
        componentWillUnmount() {
            LoginStore.removeChangeListener(this._onChange().bind(this));
        }

        //Return the thing we're wrapping. Wont get this far if
        //  user is not logged in, because of 'willTransitionTo' function.
        render() {
            return (
                <ComposedComponent
                    {...this.props}
                    user={this.state.username}
                    token={this.state.token}
                    userLoggedIn={this.state.userLoggedIn}
                    />
            );
        }

    }
};