import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Time = () => (
  <span className="time">Fecha</span>
);
const ReplyButton = () => (
  <i className="fa fa-comment-o reply-button"/>
);
const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);
const FavoriteButton = () => (
  <i className="fa fa-heart favorite-button"/>
);
const StatsButton = () => (
  <i className="fa fa-signal stats-button"/>
);
function NameWithHandle() {
  return (
    <span className="name-with-handle">
    <span className="name">Tu nombre</span>
    <span className="handle">@handle</span> </span>
  );
}
function Message() {
  return (
    <div className="message">
      Tamaño máximo 140 caracteres.
    </div>
  );
}
function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar" />
  );
}
function Tweet() {
  return (
  <div className="tweet">
    <Avatar/>
    <div className="content">
      <NameWithHandle/><Time/>
      <Message/>
      <div className="buttons">
        <ReplyButton/>
        <RetweetButton/>
        <FavoriteButton/>
        <StatsButton/>
      </div>
    </div>
  </div>
  );
}
ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
);
