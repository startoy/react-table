import React, { Component } from 'react'

class AddUser extends Component{
    handleClickSave(){
        let uname = this.refs.uname.value;
        let age = parseInt(this.refs.age.value,10);
        let nickname = this.refs.nickname.value;
        let newuser = { Name : uname, Age : age, Nickname : nickname}

        if(uname||age||nickname){
        this.props.onUserAdd( newuser );
        this.setInputNull()
        }
    }

    handleClickCancel(){
        this.props.onCancelAdd();
        this.setInputNull()
    }

    setInputNull(){
        //set blank
        this.refs.uname.value = "";
        this.refs.age.value = 1;
        this.refs.nickname.value = "";
    }


render(){
    const options = []
    for (var i = 1; i <= 100; i++) {
         options.push( <option value={i} key={i}>{i}</option>);
    }
    return (
        <div>
           <input type="text" ref="uname" maxLength="16" />
           <select ref="age">
               {options}
           </select>
           <input type="text"ref="nickname" maxLength="16"  />
           <input type="button" className="#" value="Save" onClick={()=>this.handleClickSave()} />
           <input type="button" className="#" value="Cancel" onClick={()=>this.handleClickCancel()} />
        </div>
        );
    }
}

AddUser.propTypes = {
  onUserAdd : React.PropTypes.func,
  onCancelAdd : React.PropTypes.func,
}

AddUser.defaultProps = {
   
}


export default AddUser