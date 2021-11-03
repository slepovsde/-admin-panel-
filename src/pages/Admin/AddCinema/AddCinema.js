import React from 'react';
import { Form, Button } from 'react-bootstrap';

function AddCinema() {
    return (
        <Form>
            <Form.Group >
                <Form.Label>Название фильма</Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Описание</Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Производство</Form.Label>
                <Form.Control type='text' />
            </Form.Group>
            <Form.Group >
                <Form.Label>Цена билета</Form.Label>
                <Form.Control type='number' />
            </Form.Group>
            <Form.Group >
                <Form.Label>Количество мест</Form.Label>
                <Form.Control type='number' />
            </Form.Group>
            <Form.Group>
                <Form.Label>Афиша</Form.Label>
                <Form.Control type='file' size='sm' />
            </Form.Group>
            <Button variant='primary' type='submit' style={{marginTop: '10px'}}>
                Добавить
            </Button>
        </Form>
    );
}

export default AddCinema;
