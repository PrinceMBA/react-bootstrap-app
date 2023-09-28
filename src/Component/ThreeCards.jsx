import React from "react";
import { Card, Button } from "react-bootstrap";

function Cards() {
  return (
    <div className="row">
      <div className="col-md-4">
        <Card>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/id/1173648810/photo/ice-cream-in-couple-hands.jpg?s=2048x2048&w=is&k=20&c=s-845K4B2gvE9KnXpPUr-fcuPcRgcJrkdKtmT7ak4TY="
          />
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>
              This is a sample card. You can add some content here.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/id/1413060887/photo/man-serving-different-colors-ice-cream-scoops-in-cone.webp?b=1&s=170667a&w=0&k=20&c=LbCD4e9mwOP5BO4x6GuTfGAWeXDV8InRtr4iRvM2lYk="
          />
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>
              This is another sample card with different content.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-4">
        <Card>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/id/1477691824/photo/softcream.webp?b=1&s=170667a&w=0&k=20&c=TngChSNyZqxIF-8-CGzg5QQ-sx76ogWA1FEc1VKUIr0="
          />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>And here's the third card in the series.</Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;

// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// function TreeCards() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img
//               variant="top"
//               src="public/image/bulletproof-coffee-2600-scaled.jpg"
//             />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default TreeCards;
