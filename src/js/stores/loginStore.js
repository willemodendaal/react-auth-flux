//Purposes:
//  - Hold data it gets from actions.
//  - Raises events (sub class of EventEmitter)
import AppDispatcher from '../dispatchers/appDispatcher';

class LoginStore extends BaseStore {
    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this._registerToActions.bind(this));
        this._user = null;
        this._token = null; //To implement in future.
    }

    _registerToActions(action) {
        if (action.actionType == 'login') {
            this._token = action.token;
            this._user = action.username;
            this.emitChange();
        }
    }

    //Getters to give access to properties.
    get username() {
        return this._user;
    }

    get token() {
        return this._token;
    }

    isLoggedIn() {
        return !!this._user;
    }
}

export default new LoginStore();