/**
 * Created by willem on 7/1/15.
 */
let math = require('./lib/math');
let React = require('react');

let MainView = React.createClass({
    render() {
        "use strict";

        return (
            <div>MAINDIV</div>
        );
    }
});

React.render(<MainView/>, document.querySelector('.content'));