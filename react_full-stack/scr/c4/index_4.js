import React from 'react';
import ReactDOM from 'react-dom';
function Welcomen() {
    var username = "Jose Maria";
    //var username = undefined;
    //var username = null;
    //var username = false;
    //var username = 41;
    return (
        <span>
            {username?'Hello '+username:'Not logged in'}
        </span>
    );
}
ReactDOM.render(<Welcomen/>, document.querySelector('#root'));
