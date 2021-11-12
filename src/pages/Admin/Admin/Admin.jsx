
import { Accordion } from 'react-bootstrap';

function AdminPage () {
    return (<Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>Какой-то текст</Accordion.Header>
      <Accordion.Body>
        Эту штуку делает команда Рафаэль
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1"/>
    </Accordion>)
};
export default AdminPage;