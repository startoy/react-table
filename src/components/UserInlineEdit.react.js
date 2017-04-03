import React from 'react'

class UserInlineEdit extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    renderInput(){
        
        const options = []
        for (var i = 1; i <= 100; i++) {
         options.push( <option value={i} key={i}>{i}</option>);
        }
        let tag = []
        switch(this.props.inputType){
            case 'text-input':
                tag.push ( 
                            <input 
                            key={this.props.text} 
                            type='text' 
                            onChange={this.handleChange} 
                            value={this.props.text}
                            maxLength="16"
                            autoFocus
                            />
                        )
                break
            case 'select':
                tag.push (  
                            <select 
                                onChange={this.handleChange} 
                                key={this.props.text} 
                                value={this.props.text}
                            >
                                {options}
                            </select>
                         )
                break
            default :
                return (
                    <input type='text' />
                )
        }

        return tag
    }

    handleChange(e){
        this.props.handleChange(this.props.keyitem,e.target.value)
    }

    render(){
        return(<div>{this.renderInput()}</div>)
    }

}

UserInlineEdit.propTypes = {
    text :  React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
    inputType : React.PropTypes.string,
    handleChange : React.PropTypes.func,
}

UserInlineEdit.defaultProps = {
   user : {}
}

export default UserInlineEdit