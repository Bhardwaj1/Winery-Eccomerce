import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllWine } from "./API/data";
import { Add } from "./Redux/action/action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [wineData, setWineData] = useState([]);
  useEffect(() => {
    const getAllWineData = async () => {
      let res = await getAllWine();
      console.log(res.data);
      setWineData(res.data);
    };
    getAllWineData();
  }, []);

  const notify = (name) => toast(`${name} is added to cart`);

  const dispatch = useDispatch();
  const send = (e,wine) => {
    dispatch(Add(e));
    notify(wine);
  };
  return (
    <>
      <div>
      <Row className="m-0">
        {wineData.map((item) => {
          return (
           
              <Col md={4}>
              <Card style={{margin:20,height:"25rem"}}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ "max-height": "200px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{item.wine}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.winery}
                </Card.Subtitle>
                <Card.Text>{item.location}</Card.Text>

                <Button
                  variant="primary"
                  onClick={() => {
                    send(item,item.wine);
                  }}
                >
                  Add To Cart
                </Button>
                
              </Card.Body>
            </Card>
              </Col>
            
          );
        })}
        </Row>
        <ToastContainer />
      </div>
    </>
  );
};

export default Cards;
