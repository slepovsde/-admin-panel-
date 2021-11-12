import React, { useRef } from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./EventCard.module.css";
import { useHistory } from "react-router-dom";
import Flippy, { FrontSide, BackSide } from "./index";
import Counter from "../Counter/Counter";
// import axios from "axios";
// import { BACK_URL } from "../../../../config";

function EventCard({ title, description, tickets, date, id }) {
  const history = useHistory();
  const toEvent = () => {
    history.push(`/Eventpage/${id}`);
    // axios.delete(`${BACK_URL}/api/events/${id}`)
    ref.current.toggle();
  };
  const toBackSide = () => {
    ref.current.toggle();
  };
  const ref = useRef();
  return (
    <Flippy
      flipOnClick={false}
      flipDirection="horizontal"
      ref={ref}
      className={classes.Card}
    >
      <FrontSide style={{ backgroundColor: "#ffc107" }}>
        <Card className={classes.CardContent}>
          <Card.Img
            className={classes.CardImg}
            src="https://source.unsplash.com/featured/?cinema"
          />
          <Card.Body className={classes.CardBody}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Дата: {date} </Card.Text>
            <Card.Text>
              Осталось <span className={classes.Tickets}>{tickets}</span>{" "}
              билетов
            </Card.Text>
            <hr className={classes.hr} />
          </Card.Body>

          <div className={classes.CardButtonsSection}>
            <Button  className={classes.Info} onClick={toEvent}>
              Подробнее
            </Button>
            <Button onClick={toBackSide} className={classes.EventButton}>
              Купить
            </Button>
          </div>
        </Card>
      </FrontSide>
      <BackSide >
      <Card className={classes.CardContent}>
      <Card.Title className={classes.CardTitle}>Выберите количество билетов</Card.Title>

        <div className={classes.CounterContainer} >
          <hr className={classes.hr} />
          <Counter />
          
          <Button className={classes.BuyButton} variant="primary" size="lg">
            Купить
          </Button>
          <hr className={classes.hr} />
          <Button  className={classes.BackButton} onClick={toBackSide} size="sm">🢠 Назад</Button>
        </div>
        </Card>
      </BackSide>
    </Flippy>
  );
}

export default EventCard;
