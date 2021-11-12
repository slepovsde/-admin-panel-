import React from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./Eventpage.module.css";
import axios from "axios";
import { useParams } from "react-router";
// import { BACK_URL } from "../../../../config.js";
// import path from "path";
import { useState, useEffect } from "react";
import Counter from "../../Components/Counter/Counter";

const Eventpage = () => {
  const [state, setstate] = useState({});

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:5000/api/events/${params.id}`
      );
      setstate(response.data);
    }
    fetchData();
  }, [params.id]);

  return (
    <div className={classes.Main}>
      <Card className={classes.Card}>
        <img
          className={classes.Img}
          src="https://source.unsplash.com/featured/?cinema/"
          alt = ""
        />
       
        <div className={classes.Content}>
          <div>
            <Card.Body>
              <Card.Title>{state.title}</Card.Title>
              <Card.Text>Дата: {state.date} </Card.Text>
              <Card.Text>Осталось {state.tickets} билетов</Card.Text>
              <Card.Text>Описание: {state.description} </Card.Text>
            </Card.Body>
          </div>
          <div className={classes.BuyContainer} >
            <Counter />
            <Button className={classes.BuyButton} variant="primary" size="lg">
              Купить
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Eventpage;
