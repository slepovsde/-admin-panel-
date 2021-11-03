import React, { Component } from 'react';
import CinemaCard from './../Components/CinemaCard/CinemaCard';
import {Col, Row} from "react-bootstrap";

class CinemaList extends Component {
  render() {
    return <Row md={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
            <Col>
      <CinemaCard/>
            </Col>
        ))}
    </Row>
  }
}

export default CinemaList;
