import React from 'react';
import ReactDOM from 'react-dom';
// a
function lowercaseComponent() {
  return (
    <span>No lo va a pintar</span>
  );
}
/*
//b
function TwoElementsAtOnce() {
  return (
  <span>Uno</span>
    <span>dos</span>
  );
}
//c
function TwoExpressions() {
  var x = 7;
  return (
    <span>{x && 5; x && 7}</span>
  );
}
//d
function ReturnInJSX() {
  return (
    <span>{return}</span>
  );
}
//e
function AlertHello() {
  return (
    <span>{alert('hello')}</span>
  );
}
//f
function QuotedString() {
  return (
    <div>
      <span>"Quoted string"</span>
      <span>{"Quoted string inside braces"}</span>
      <span>{'single quotes'}</span>
    </div>
  );
}
*/
ReactDOM.render(<lowercaseComponent/>, document.querySelector('#root'));
