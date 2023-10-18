import React from "react";
import { Row, Col } from "react-bootstrap";

const reviewStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "10px",
};

function Github() {
  const reviews = [
    {
      author: "Rehman FARAZ",
      position: "Marketing and Promotions Manager, FERROZE Inc.",
      content:
        "This digital marketing service is fantastic! We saw a 30% increase in our online leads within just a month of implementation.",
      image: "john-doe.jpg", // Add image file path
    },
    {
      author: "Fazal Ahmad",
      position: "Marketing Manager, AL-Aziz Corp.",
      content:
        "I saw a significant improvement in our brand's online presence after using this service. The team was extremely professional and provided tailored strategies.",
      image: "jane-smith.jpg", // Add image file path
    },
    // Add more reviews as needed
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={12}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Digital Marketing <strong className="purple">Reviews</strong>
        </h1>
      </Col>
      {reviews.map((review, index) => (
        <Col md={6} key={index}>
          <div style={reviewStyle}>
            {review.image && (
              <div className="review-image">
                <img src={review.image} alt={review.author} />
              </div>
            )}
            <div className="review-content">
              <h3>{review.author}</h3>
              <p className="position">{review.position}</p>
              <p>{review.content}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Github;
