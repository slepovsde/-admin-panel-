import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class EditCinema extends Component {
    state = {
        name: 'venom',
        image: '',
        ticketPrice: '50',
        city: 'NSK',
        seatsAvailable: '100',
        seats: [],
        genre: 'action',
    };
    render() {
        const { name, image, ticketPrice, genre, city, seatsAvailable, seats } = this.state;
       

        return (
            <Form>
                <Form.Group>
                    <Form.Label>Название фильма</Form.Label>
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
                    <Form.Label>Цена билета</Form.Label>
                    <Form.Control type='number' value={ticketPrice} />
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
export default EditCinema;
