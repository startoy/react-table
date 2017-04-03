import React, { Component } from 'react'
import UserInlineEdit from './UserInlineEdit.react'
class UserTableListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditable : false,
            user : this.props.user,
        }

        this.handleClickBtnEdit = this.handleClickBtnEdit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    renderText(){
        let renderText = Object.keys(this.props.user).map((key,index)=>{
            return(
                <td key={index}>{this.props.user[key]}</td>
            )
        })
        return renderText
    }

    renderInput(){
        let renderText = Object.keys(this.props.user).map((key,index)=>{
            let inputtype = ''

            if(typeof(this.props.user[key])==='number'){
                inputtype = 'select'
            }else{
                 inputtype = 'text-input'
            }
            return(
                <td key={index} style={{backgroundColor: 'blue'}}>
                    <UserInlineEdit
                        keyitem={key}
                        text={this.props.user[key]} 
                        inputType={inputtype}
                        handleChange={this.handleEdit}
                    />
                </td>
            )
        })
        return renderText
    }


    handleClickDelete(){
        this.props.onUserDelete(this.props.user)
    }

    handleEdit(keyitem,msg){
        
        let user = this.state.user
        if(keyitem==='Age'){user[keyitem] = parseInt(msg,10)}
        else{user[keyitem] = msg}
        this.setState({
            user : user
        })
        this.props.onUserEdit(this.state.user)
    }
    handleClickBtnEdit(){
        this.setState({
            isEditable : !this.state.isEditable,
        })
    }
    render(){
        let view = this.state.isEditable ? this.renderInput() : this.renderText()
        let btnEditTxt = this.state.isEditable ? 'Save' : 'Edit'
        return (
            <tr>
                {view}
                <td><input type="button" className="#" value={btnEditTxt} onClick={this.handleClickBtnEdit} />
                <input type="button" className="#" value="Delete" onClick={()=>this.handleClickDelete()} /></td>
            </tr>
            );
        }
}

export default UserTableListItem