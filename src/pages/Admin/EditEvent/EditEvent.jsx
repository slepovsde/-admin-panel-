
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class EditEvent extends Component {
    state = {
        name: '',
        image: '',
        city: '',
        seatsAvailable: '',
        seats: [],
        genre: '',
    };
    render() {
        const { name, image, genre, city, seatsAvailable, } = this.state;
       

        return (
            <Form>
                <Form.Group>
                    <Form.Label>Название мероприятия</Form.Label>
                    <Form.Control type='text' value={name}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control type='text' value={genre} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Производство</Form.Label>
                    <Form.Control type='text' value={city}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Количество мест</Form.Label>
                    <Form.Control type='number' value={seatsAvailable} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Афиша</Form.Label>
                    <Form.Control type='file' size='sm' value={image} />
                </Form.Group>
                <Button variant='primary' type='submit' style={{ marginTop: '10px' }}>
                    Сохранить
                </Button>
            </Form>
        );
    }
}
export default EditEvent;
