import React, { Component } from 'react';
import AddUser from './AddUser.react'
import UserTableList from './UserTableList.react'


class UserTableApp extends Component{
    constructor(props){
        super(props);

        this.state = {
            userlists : this.props.userlists,
        };

        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleEditUser = this.handleEditUser.bind(this);
    }

handleAddUser(newUser){
    
    this.setState({
        userlists : this.state.userlists.concat( [newUser] )
    });
}

handleEditUser( edituser)
{

}

handleDeleteUser( user )
{
    // alert(user.Name);
    let index = this.state.userlists.indexOf(user);
    //alert("TableAPP "+index);
    this.state.userlists.splice(index,1)
    this.setState(this.state.userlists)

}

toggleAddBtn()
{

}


render(){
    let newUser = {Name: 'Sporting Goods',Age:40};
    return (
        <div>
            <UserTableList userlists={this.state.userlists} 
                        onUserDelete={this.handleDeleteUser}
                        onUserEdit={this.handleEditUser} />
            <AddUser />
            <button onClick={()=>this.handleAddUser(newUser)}>Add me!</button>
      </div>  
        );
    }
}



export default UserTableApp