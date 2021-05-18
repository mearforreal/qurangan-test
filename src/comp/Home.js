import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "../axios";
import requests from "../requests";

function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // fetch data async
    async function fetchData() {
      const request = await axios.get(requests.photos);
      let photosArr = request.data.slice(0, 20);
      setPhotos(photosArr);

      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <h3 className="mt-5">Главная</h3>
        <Row className="mt-5">
          {photos.map((foto) => (
            <Col className="mb-4" key={foto.id}>
              <Card style={{ width: "15rem", height: "435px" }}>
                <Card.Img variant="top" src={foto.thumbnailUrl} />
                <Card.Body>
                  <Card.Title>{foto.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
