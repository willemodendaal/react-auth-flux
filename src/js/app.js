let React = require('react');
let Login = require('./components/loginComponent');

class MainView extends React.Component {
    render() {

        return (
            <div>
                <Login></Login>
            </div>
        );
    }
}

React.render(<MainView/>, document.querySelector('.content'));