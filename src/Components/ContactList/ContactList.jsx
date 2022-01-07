import React from 'react';
import ContactCard from '../ContactCard/ContactCard';


const ContactList = (props) => {
    console.log(props)
    return (
        <div  style={{textAlign:'center'}}>
            <ul className='d-flex flex-wrap justify-content-center'>
                {props.contacts.map((item, index) =>(
                    <div key={item.id}>
                      <ContactCard
                      key={item.id}
                      item={item}
                      handleDeleteContact={props.handleDeleteContact}
                      getContactToEdit={props.getContactToEdit}
                      />
                    </div>
                ))} 
            </ul>
        </div>
    );
};

export default ContactList;