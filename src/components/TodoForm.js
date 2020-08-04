import React from 'react'

class TodoForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            newItemText: ''
        }
    }
handleChange = e => {
    this.setState({
        newItemText: e.target.value
        
    })
}

handleSubmit = e => {
    e.preventDefault() 
    this.props.addItem(this.state.newItemText);
    this.setState({
        newItemText: ''
    })

}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='newItemText'
                value={this.state.newItemText}
                onChange={this.handleChange}
                
/>
<button>ADD TASK </button>
            </form>
        )
    }
}

export default TodoForm; 