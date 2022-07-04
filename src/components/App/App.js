import React, { Component } from "react";
import { nanoid } from 'nanoid'
import From from "../Form/Form";
import ContactList from "../ContactList/ContactList";



class App extends Component { 
    state = {
        contacts: [],
    };

    onSubmit = data => {
        this.setState(({contacts}) => ({
            contacts: [...contacts, data]
        }))
    };

    render() { 
        return (
            <div>
                <From
                    onSubmit={this.onSubmit}
                />
                <ContactList contact={this.state.contacts} />
            </div>
        ) 
    }
}

export default App