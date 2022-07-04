import React, { Component } from "react";
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
                <ContactList  />
            </div>
        ) 
    }
}

export default App