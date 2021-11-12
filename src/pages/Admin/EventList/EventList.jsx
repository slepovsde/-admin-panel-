import React from 'react';
import EventCard from '../Components/EventCard/EventCard';

import axios from 'axios';
import { useEffect, useState } from 'react';
import {  Row } from "react-bootstrap";

const Eventlist = () => {
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('http://localhost:5000/api/events');
      console.log(data);
      setEvents(data);
    }
    fetchData();
  }, []);

    return (
        <Row xs={1} md={2} className="g-4">
        
        {events.map((event) => {
          return (
            <EventCard
              title={event.title}
              description={event.description}
              tickets={event.tickets}
              date={event.date}
              id={event._id}
            />
          );
        })}
     
    </Row>
    );
}

export default Eventlist;

// class CinemaList extends Component {
//   render() {
//     return <Row md={4} className="g-4">
//         {Array.from({ length: 12 }).map((_, idx) => (
//             <Col>
//       <CinemaCard/>
//             </Col>
//         ))}
//     </Row>

//   }
// }

// export default CinemaList;
