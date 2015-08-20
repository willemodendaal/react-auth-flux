import AppDispatcher from '../dispatchers/AppDispatcher';
import RouterContainer from '../services/routerContainer';

class LoginActions {
    loginUser(username) {
        localStorage.setItem('token', username); //Pass real token in future.

        //Change URL to home.
        RouterContainer.get().transitionTo('/');

        AppDispatcher.dispatch({
            actionType: 'login',
            username: username,
            token: username
        });
    }
}

export default new LoginActions();