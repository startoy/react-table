import React, { Component } from 'react';
import AddUser from './AddUser.react'
import UserTableList from './UserTableList.react'
import  '../css/UserTableApp.react.css'


class UserTableApp extends Component{
    constructor(props){
        super(props);

        this.state = {
            userlists : {},
            displayForm : false ,

        };

        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleEditUser = this.handleEditUser.bind(this);
        this.toggleAdd =  this.toggleAdd.bind(this);
    }

handleAddUser(newUser){
    this.setState({
        userlists : this.state.userlists.concat( [newUser] )
    });
    this.saveToStorage(newUser,false)
}

handleEditUser( user )
{
    // console.log(user)
    let index = this.state.userlists.indexOf(user)
    let usertemp =   this.state.userlists
    usertemp[index] = user
    this.setState({ userlists : usertemp, })
    this.saveToStorage(this.state.userlists,true)
}

handleDeleteUser( user )
{
    // alert(user.Name);
    let index = this.state.userlists.indexOf(user)
    let usertemp =   this.state.userlists
    usertemp.splice(index,1)
    this.setState({ userlists : usertemp, })
    this.saveToStorage(this.state.userlists,true)
}

toggleAdd()
{
    this.setState({
        displayForm : !this.state.displayForm
    })
}

saveToStorage(data,isentire){

    let dataArray = [];
    if(isentire){
        // true -> replace entire old data (set a new list from state)
        // then set to blank
        localStorage.setItem('user','')
    }

    if(localStorage.getItem('user')){
        //get users from exist localStorage
        dataArray = JSON.parse(localStorage.getItem('user'))
    }

    //if data is an array
    if(Array.isArray(data))
    {
        for(let a of data){dataArray.push(a)} //insert each new data to the array
    }else{ 
        dataArray.push(data)  
    }

    localStorage.setItem('user',JSON.stringify(dataArray)) //insert array to localStorage JSON
}


componentWillMount(){
    // check if browser support Storage or not
    if (typeof(Storage) !== "undefined") {
        this.saveToStorage(this.props.userlists,true)
    } else {
        alert('Browser not support Storage');
        // return;
    }
    this.setState({
        userlists : JSON.parse(localStorage.getItem('user'))
    }) 
}


render(){
    let display = this.state.displayForm ? "inline-block" : "none";
    return (
        <div className="container defaultfontstyle">
            <div className="pull-center">
                <UserTableList 
                    userlists={this.state.userlists} 
                    onUserDelete={this.handleDeleteUser}
                    onUserEdit={this.handleEditUser} 
                />
                <div className="space-each-sec"> 
                    <div style={{ display : display }} >
                        <AddUser 
                            onUserAdd={this.handleAddUser} 
                            onCancelAdd={this.toggleAdd} 
                        />
                    </div>
                    <div className="space-each-sec">               
                        <input type="button" onClick={()=>this.toggleAdd()} value="Add"  />
                    </div>
                </div>
            </div>
      </div>  
        );
    }
}

//if no props -> use default
let TuserList = [
                {Name:'Mr. A',Age:32,Nickname:'A'},
                {Name:'Mr. B',Age:22,Nickname:'B'},
                ]

UserTableApp.propTypes = {
  userlists : React.PropTypes.array.isRequired,
}

UserTableApp.defaultProps = {
    userlists: TuserList,
}

export default UserTableApp