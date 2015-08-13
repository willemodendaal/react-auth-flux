import AppDispatcher from '../dispatchers/AppDispatcher.js';

class LoginActions {
    loginUser(username) {
        localStorage.setItem('token', username); //Pass real token in future.

        AppDispatcher.dispatch({
            actionType: 'login',
            username: username
        });
    }
}

export default new LoginActions();