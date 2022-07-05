import React from "react";

const ContactItem = ({ item }) => {

    return (
        <li>
            {item.name} : {item.number}
        </li>
    )
}

export default ContactItem;