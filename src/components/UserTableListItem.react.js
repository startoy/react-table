import React, { Component } from 'react'

class UserTableListItem extends Component{

handleDelete(){
    this.props.onUserDelete(this.props.user)
}
render(){
    return (
        <tr>
            <td> {this.props.user.Name}</td>
            <td> {this.props.user.Age}</td>
            <td> {this.props.user.Nickname}</td>
            <td><input type="button" className="#" value="Edit" onClick="" /></td>
            <td><input type="button" className="#" value="Delete" onClick={()=>this.handleDelete()} /></td>
        </tr>
        );
    }
}

export default UserTableListItem