import { height } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { getAllWine } from "./API/data";

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
  return (
    <>
      {/* <div className="row"> */}
        <div className="col">
          {wineData.map((item) => {
            return (
              <Card style={{ width: "18rem" }} className="d-flex">
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

                  <Button variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      {/* </div> */}
    </>
  );
};

export default Cards;
