import { Component } from "react";


const ContactList = ({ contact }) => {

    return (
        <ul>
            {contact.length === 0 ?
                "List is empty"
                :
                console.log(contact.map(item => {
                    return item.name
                }))
        }
        </ul>
    )
}

/* class ContactList extends Component { 
    render() { 
        return (
            <div>
                <ul>
                    {this.props.contacts.length ? 
                        this.props.contacts.map(item => {
                            console.log(item);
                            <li key={item.id}>
                                 {item.name}
                            </li>
                        })   :
                        "ХУЙ"
                    }
                    
                </ul>
            </div>
        )
    }
};
 */

export default ContactList;