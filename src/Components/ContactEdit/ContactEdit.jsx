import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const ContactEdit = ({show, handleClose, contactToEdit, setContactToEdit, updateContact}) => {

    function handleValues(e){
        let editedContact = 
            {...contactToEdit,
            [e.target.name] : e.target.value,
            [e.target.phone] : e.target.value,
            [e.target.img] : e.target.value
            }     
         setContactToEdit(editedContact)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>ИЗМЕНЕНИЕ КОНТАКТА</Modal.Title>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-items-center'>
                <div>
                <input 
                className='m-3'
                    type="text" 
                    onChange={handleValues} 
                    value={contactToEdit.name} 
                    name='name'
                />
</div>
<div>
                <input 
                className='m-3'
                    type='number' 
                    onChange={handleValues} 
                    value={contactToEdit.phone} 
                    name='phone'
                />
                </div>
                <div>
                <input 
                className='m-3'
                    onChange={(e) => handleValues(e.target.value)}  
                    type='url' placeholder='Фото'
                    value={contactToEdit.img}
                    name='img'
                />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Закрыть
            </Button>
            <Button variant="primary" onClick={() => updateContact()}>
                Сохранить изменения
            </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
};

export default ContactEdit;