import { useState } from 'react';
import './App.css';
import AddContact from './Components/AddContact/AddContact';
import ContactList from './Components/ContactList/ContactList';
import ContactEdit from './Components/ContactEdit/ContactEdit';
import ContactNavbar from './Components/ContactNavbar/ContactNavbar';

function App() {
  let [contacts, setContacts] = useState([]);


  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [contactToEdit, setContactToEdit] = useState(null)

  function getContactToEdit (item) {
    setContactToEdit(item)
    handleShow()
  }

  function updateContact (){
    let arr = contacts.map(item =>{
      if(item.id !== contactToEdit.id){
        return item 
      } else{
        return contactToEdit
      }
    })
    setContacts(arr)
    handleClose()
  }

  const [showContact, setShowContact] = useState(false)
  const handleCloseContact = () => setShowContact(false)
  const handleShowContact = () => setShowContact(true)


  const [contactToAdd, setContactToAdd] = useState(null)

  function getContactToAdd (item) {
    setContactToAdd(item)
    handleShowContact()
  }

  function handleNewContact(contactToAdd){
    let newContactsArray = [...contacts];
    newContactsArray.push(contactToAdd);

    setContacts(newContactsArray)
  }


  function handleDeleteContact(id){
    let newContactsArr = contacts.filter(item => {
      return item.id !== id
    })
    setContacts(newContactsArr)
  }


  return (
    <div className="App">
      
      <ContactNavbar
      handleShowContact={handleShowContact}
      getContactToAdd={getContactToAdd}
      />

        <AddContact
        contactToAdd={contactToAdd}
        setContactToAdd={setContactToAdd}
        showContact={showContact}
        handleCloseContact={handleCloseContact}
        handleNewContact={handleNewContact}
        />
{/* 
      <AddContact
      handleNewContact={handleNewContact}
      /> */}
      
      {contactToEdit ?( 
      <ContactEdit
      contactToEdit={contactToEdit}
      setContactToEdit={setContactToEdit}
      show={show}
      handleClose={handleClose}
      updateContact={updateContact}
      />
      ) : null}
      
      <ContactList
      contacts={contacts}
      handleDeleteContact={handleDeleteContact}
      getContactToEdit={getContactToEdit}
      />
    </div>
  );
}

export default App;
