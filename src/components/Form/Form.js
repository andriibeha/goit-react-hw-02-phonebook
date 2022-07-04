import React, { Component } from "react";
import { nanoid } from 'nanoid'

class Form extends Component {
    state = {
        name: "",
        id: ""
    } 

    inputNameId = nanoid();

    handleInputChange = (e) => { 
        this.setState({
            name: e.target.value,
            id: nanoid()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({
            name: "",
            id: ""
        })
    }
    
    render() { 
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.inputNameId}>Name:</label>
                <input onInput={this.handleInputChange}
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={this.inputNameId}
                    />
                    
                <button type="submit">Add contact</button>
            </form>
    </div>
        );
    }
}
 


export default Form;