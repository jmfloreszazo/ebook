import React from 'react';
import ReactDOM from 'react-dom';
function MiComponente() {
        /*
        <div>
            Test1
            Test2
        </div>
        */
        /*
        <div>
            Test3

            Test4

            Test5
        </div>
        */
        /*
        <div>
            &nbsp;Test6
            &nbsp;Test7&nbsp;
        </div>
        */
       <div>
            Test8
            {' '}
            Test9
        </div>
    );
}
ReactDOM.render(
  <MiComponente/>,
  document.getElementById('root')
);