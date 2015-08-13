//On successful login, will create a loginAction and invoke the dispatcher,
//  which will update the loginStore, which will trigger the front-end changes.
import LoginActions from '../actions/loginActions';

class AuthService {

    login(username, password) {
        console.log('Logging in with... ', username, ' ', password);

        //All logins succeed for now.
        //Call Facebook auth here. Consider using Node Passport or Auth0.

        //Success callback triggers the action...
        LoginActions.loginUser(username);
    }
}

export default new AuthService();
