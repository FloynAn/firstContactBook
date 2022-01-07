import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ContactCard = (props) => {

    return (
        <div className='m-3'>
            <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src={props.item.img} alt="Фото" style={{height: '300px'}}/>
            <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Text>
            {props.item.phone}
            </Card.Text>
            <Button variant="danger" 
            onClick={() =>props.handleDeleteContact(props.item.id)}>
                Удалить
            </Button>
            <Button variant="info" 
            onClick={() => props.getContactToEdit(props.item)}>
                Изменить
            </Button>
            </Card.Body>
            
            </Card>
        </div>
    );
};

export default ContactCard;