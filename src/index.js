import React from 'react';
import ReactDOM from 'react-dom';
import UserTableApp from './components/UserTableApp.react';
import './index.css';
// import './App.css';

    //init data
    let TuserList = [
                    {Name:'Mr. A',Age:32,Nickname:'A'},
                    {Name:'Mr. B',Age:22,Nickname:'B'},
                    ]

ReactDOM.render(
  <UserTableApp userlists={TuserList}/>,
  document.getElementById('root')
);
