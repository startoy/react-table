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
    const styles = {width:"10%",padding:2}
    const options = []
    for (var i = 1; i <= 100; i++) {
         options.push( <option value={i} key={i}>{i}</option>);
    }
    return (
        <div>
           <input type="text" style={styles} ref="uname" />
           <select style={styles} ref="age">
               {options}
           </select>
           <input type="text" style={styles} ref="nickname" />
           <input type="button" className="#" value="Save" onClick={()=>this.handleClickSave()} />
           <input type="button" className="#" value="Cancel" onClick={()=>this.handleClickCancel()} />
        </div>
        );
    }
}


export default AddUser