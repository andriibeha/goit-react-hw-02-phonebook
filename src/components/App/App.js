import React, { Component } from "react";
import From from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "components/Filter/Filter";


class App extends Component { 
    state = {
        contacts: [
            {id:"1", name:"Tom", number:"123-45-67"}
        ],
        filter: ""
    };

    onSubmit = data => {
        console.log("state name", this.state.contacts.name);
        console.log("data name", data.name)
        if (this.state.contacts.name === data.name) { 
            return alert(`${data.name} already in contact`)
        } else { 
            this.setState(({contacts}) => ({
            contacts: [...contacts, data]
        }))
        }   
        
    };

    onFilter = (e) => {
        this.setState({filter: e.target.value})
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state
        const filterTolowerCase = filter.toLowerCase();

        return contacts.filter(
            contact => contact.name.toLowerCase().includes(filterTolowerCase) 
        )
    };

    render() { 
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts()

        return (
            <div>
                <h1>Phonebook</h1>
                <From
                    onSubmit={this.onSubmit}
                />

                <h2>Contacts</h2>
                <Filter
                    value={filter}
                    onChange={this.onFilter}
                />

                <ContactList contacts={visibleContacts} />
            </div>
        ) 
    }
}

export default App