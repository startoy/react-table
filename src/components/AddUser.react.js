import React, { Component } from 'react'

class AddUser extends Component{

render(){
    var styles = {width:"10%"}
    return (
        <div>
           <input type="text" style={styles} />
           <input type="text" style={styles} />
           <input type="text" style={styles} />
           <input type="button" className="#" value="Save" onClick="" />
           <input type="button" className="#" value="Cancel" onClick="" />
        </div>
        );
    }
}


export default AddUser