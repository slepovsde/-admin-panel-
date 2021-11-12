import React from 'react';
import {Card, ListGroup, Button} from "react-bootstrap";

function CinemaCard({title, description}) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img height='200px' variant='top' src='https://source.unsplash.com/featured/?cinema' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>USA</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>50 EURO</ListGroup.Item>
                    </ListGroup>
                    <Button variant='primary'>Edit</Button>
                </Card.Body>
                <Card.Footer className='text-muted'>100 seats available</Card.Footer>
            </Card>
        </>
    );
}

export default CinemaCard;
