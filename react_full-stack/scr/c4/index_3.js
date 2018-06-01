import React from 'react';
import ReactDOM from 'react-dom';
function MiComponente() {
    return (
        React.createElement('div', {className: 'Libro'},
            React.createElement('div', {className: 'Titulo'}, 'Titulo del Libro'),
            React.createElement('div', {className: 'Autor'}, 'Autor del libro'),
            React.createElement('ul', {className: 'Estadisticas'},
                React.createElement('li', {className: 'valoracion'}, '6.5'),
                React.createElement('li', {className: 'isbn'}, '12-345678-910')
            )
        )
    );
}
ReactDOM.render(
    <MiComponente/>,
    document.getElementById('root')
);