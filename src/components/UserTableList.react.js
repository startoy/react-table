import React, { Component } from 'react'
import UserTableListItem from './UserTableListItem.react'
import  '../css/UserTableList.react.css'

class UserTableList extends Component{

render(){
var thBodyContent = this.props.userlists.map((user,index) => {
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
        <table className="table shadow">
            <thead>
                <tr>
                    <th style={{width:'35%'}}>Name</th>
                    <th style={{width:'9%'}}>Age</th>
                    <th style={{width:'35%'}}>Nickname</th>
                    <th style={{width:'21%'}}>Action</th>
                </tr>
            </thead>
            <tbody>
                    {thBodyContent}
            </tbody>
        </table>
        );
    }
}

UserTableList.propTypes = {
  userlists : React.PropTypes.array.isRequired,
  onUserDelete : React.PropTypes.func,
  onUserEdit : React.PropTypes.func,
}

UserTableList.defaultProps = {
   
}

export default UserTableList