import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import EventService from '../../../API/EventService';
import { useFetching } from '../../../hooks/useFetching';

function AddEvent() {
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    tickets: '',
    image: {},
  });
  const [fetch, isCreateLoading, createError] = useFetching(async () => {
    let formData = new FormData();
    for (let key in event) {
      formData.append(key, event[key]);
    }
    const newEvent = await EventService.create(formData);
    console.log('новый ивент:',newEvent)
  })
  const onSend = (e) => {
    e.preventDefault();
    fetch();
    console.log('загрузка?',isCreateLoading);
    console.log('ошибка:',createError);
  }
  
  return (
    <Form encType='multipart/form-data'>
      <Form.Group>
        <Form.Label>Название мероприятия</Form.Label>
        <Form.Control
          type='text'
          value={event.title}
          onChange={(e) => {
            setEvent({ ...event, title: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Описание</Form.Label>
        <Form.Control
          type='text'
          value={event.description}
          onChange={(e) => {
            setEvent({ ...event, description: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Дата</Form.Label>
        <Form.Control
          type='text'
          value={event.date}
          onChange={(e) => {
            setEvent({ ...event, date: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Количество мест</Form.Label>
        <Form.Control
          type='number'
          value={event.tickets}
          onChange={(e) => {
            setEvent({ ...event, tickets: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Афиша</Form.Label>
        <Form.Control
          type='file'
          size='sm'
          name='image'
          onChange={(e) => {
            setEvent({ ...event, image: e.target.files[0] });
          }}
        />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        onClick={onSend}
        style={{ marginTop: '10px' }}
      >
        Добавить
      </Button>
    </Form>
  );
}
export default AddEvent;
