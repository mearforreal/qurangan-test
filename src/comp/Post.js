import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import axios from "../axios";
import requests from "../requests";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch data async
    async function fetchData() {
      const request = await axios.get(requests.posts);
      let postsArr = request.data.slice(0, 20);
      setPosts(postsArr);

      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      <Container>
        <h3 className="mt-5">Пост</h3>
        <Row className="mt-5">
          {posts.map((post) => (
            <Card
              key={post.id}
              style={{ width: "16rem", height: "310px" }}
              className="mb-4 mr-3"
            >
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>

                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Post;
