import {React} from "react";
import EventList from "../../Components/EventList/EventList";

import { Container } from "react-bootstrap";



function Homepage() {
  return (
    <div>
     
      <Container>
        <EventList />
      </Container>
    </div>
  );
}

export default Homepage;
