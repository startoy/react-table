import React from 'react';
import ReactDOM from 'react-dom';
import UserTableApp from './components/UserTableApp.react';
import './index.css';

var userList = [
  {Name:'Mr. A',Age:32,Nickname:'A'},
  {Name:'Mr. B',Age:22,Nickname:'B'},
  ];

ReactDOM.render(
  <UserTableApp userlists={userList} />,
  document.getElementById('root')
);
