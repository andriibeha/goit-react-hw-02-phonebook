import ContactItem from "components/ContactItem/ContactItem";


const ContactList = ({ contacts }) => {

    return (
        <ul>    
            {contacts.map((item) => (
                <ContactItem key={item.id} item={item} />
            ))}
        </ul>
    )
}


export default ContactList;