//Store base class that contains utility methods for all stores
//  to use.

import EventEmitter from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';

class BaseStore extends EventEmitter {

    constructor() {
        super();
    }

    subscribe(actionSubscribe) {
        this._dispatchToken = AppDispatcher.register(actionSubscribe());
    }

    get dispatchToken() {
        return this._dispatchToken;
    }

    emitChange() {
        this.emit('CHANGE'); //All components listen to generic 'Change' event. No need to be more specific than that.
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb)
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }
}

export default BaseStore;