import AppDispatcher from '../dispatchers/appDispatcher';
import RouterContainer from '../services/routerContainer';

class LoginActions {
    logoff() {
        localStorage.removeItem('token');

        //Change URL to login.
        RouterContainer.get().transitionTo('/login');

        AppDispatcher.dispatch({
            actionType: 'logoff'
        });
    }

    loginUser(token) {
        localStorage.setItem('token', token); //Pass real token in future.

        //Change URL to home.
        RouterContainer.get().transitionTo('/');

        //Store the fact that user is logged in.
        localStorage.setItem('token', token);

        AppDispatcher.dispatch({
            actionType: 'login',
            username: token,
            token: token
        });
    }
}

export default new LoginActions();