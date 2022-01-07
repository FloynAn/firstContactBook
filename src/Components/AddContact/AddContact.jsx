import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const AddContact = ({showContact, handleCloseContact, handleNewContact}) => {
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('')
    let [img, setImg] = useState('')

    function handleClick(){
        let newContact = {
            name,
            phone,
            img,
            id: Date.now()
        }
        console.log(newContact, 'new')
        handleNewContact(newContact)
        handleCloseContact()
        setName('')
        setPhone('')
        setImg('')
    }
    console.log(showContact, 'showContact in NAVBAR')

    return (
        <>
        <Modal show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
        <Modal.Title>СОЗДАТЬ</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column align-items-center'>
            <div>
            <input 
            className='m-3'
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder='Имя'
                value={name}
            />
</div>
<div>
            <input 
            className='m-3'
                onChange={(e) => setPhone(e.target.value)}
                type='number'
                 placeholder='Номер телефона'
                value={phone}
            />
            </div>
            <div>
            <input 
            className='m-3'
                onChange={(e) => setImg(e.target.value)}  
                type='url' 
                placeholder='Фото'
                value={img}
            />
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="info" onClick={handleClick}>
            Создать контакт
        </Button>
        </Modal.Footer>
        </Modal>

        {/* <div>
            <h3>СОЗДАНИЕ КОНТАКТА</h3>
            <ul>
                <li style={{listStyle: 'none'}}>
                    <input 
                        style={{borderRadius:'5px'}}
                        onChange={(e) => setName(e.target.value)} 
                        type="text" placeholder='Имя'
                        value={name}
                    />
                </li>
                <li style={{listStyle: 'none'}}>
                    <input 
                        style={{borderRadius:'5px'}}
                        onChange={(e) => setPhone(e.target.value)}  
                        type='number' placeholder='Номер телефона'
                        value={phone}
                    />
                </li>
                <li style={{listStyle: 'none'}}>
                    <input 
                        style={{borderRadius:'5px'}}
                        onChange={(e) => setImg(e.target.value)}  
                        type='url' placeholder='Фото'
                        value={img}
                    />
                </li>
            <Button 
                className='m-3'
                variant="info"
                
                onClick={handleClick}>
                Создать контакт
            </Button>
            
            </ul>
        </div> */}
        </>
    );
};

export default AddContact;