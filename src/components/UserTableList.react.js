import React, { Component } from 'react'
import UserTableListItem from './UserTableListItem.react';

class UserTableList extends Component{

render(){
    

var thBody = this.props.userlists.map((user,index) => {
    return (
         <UserTableListItem 
                key={index} 
                onUserDelete={this.props.onUserDelete}
                onUserEdit={this.props.onUserEdit} 
                user={user}
         />
    );
});

    return (
        <table style={{backgroundColor: 'red'}}>
            <thead style={{backgroundColor: 'pink'}}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Nickname</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {thBody}
            </tbody>
        </table>
        );
    }
}

export default UserTableList