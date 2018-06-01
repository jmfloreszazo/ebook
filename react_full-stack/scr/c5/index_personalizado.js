import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Time = () => (
  <span className="time">Hace 12 horas.</span>
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
    <span className="name">Jose María Flores Zazo</span>
    <span className="handle">@jmfloreszazo</span> </span>
  );  
}
function Message() {
  return (
    <div className="message">
      Adobe XD la herramienta de prototipos de Adobe ahora tiene un plan free https://www.adobe.com/es/products/xd/…
    </div>
  );
}
function Avatar() {
  return (
    <img 
      src="https://es.gravatar.com/userimage/5953573/58e4f0ed57621a684f59f7d4b902dd37"
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
