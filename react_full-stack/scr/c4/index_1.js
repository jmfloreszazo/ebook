import React from 'react';
import ReactDOM from 'react-dom';
function MiComponente() {
    return (        
        <div className='libro'>
            <div className='titulo'>Título del libro</div>
            <div className='autor'>Autor del libro</div>
            <ul className='propiedades'>
                <li className='valoracion'>6.5</li>
                <li className='isbn'> 12-345678-910</li>
            </ul>
        </div>        
    );
}
ReactDOM.render(
  <MiComponente/>,
  document.getElementById('root')
);