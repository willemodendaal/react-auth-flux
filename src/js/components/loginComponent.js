//Adapted from https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/
import React from 'react/addons';
import ReactMixin from 'react-mixin';
import AuthService from '../services/AuthService';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '',
            password: ''
        };
    }

    login(evt) {
        evt.preventDefault();
        console.log('Logging in');

        AuthService.login(this.state.user, this.state.password)
            .catch(function (err) {
                console.log('Error logging in. ', err);
            });
    }

    render() {
        return (
            <form role="form">
                <div className="form-group">
                    <input type="text" valueLink={this.linkState('user')} placeholder="Username"/>
                    <input type="password" valueLink={this.linkState('password')} placeholder="Password"/>
                </div>
                <button type="submit" onClick={this.login.bind(this)}>Submit</button>
            </form>
        );
    }
}

//Use reactMixin to enable two-way databinding between username and password fields and the component.
// Because ES6 classes don't have react mixins?
ReactMixin(Login.prototype, React.addons.LinkedStateMixin);

export default Login;
