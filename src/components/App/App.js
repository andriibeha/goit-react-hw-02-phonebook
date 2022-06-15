import React, { Component } from "react";

import From from "../Form/Form";
import ContactList from "../ContactList/ContactList";



class App extends Component { 


    render() { 
        return (
            <div>
               <From />
                <ContactList />
            </div>
        ) 
    }
}

export default App