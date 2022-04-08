import React from "react";
import { Slide } from "react-slideshow-image";
import './home.css'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import image2 from './image2.png';
import image3 from './image3.png';
import img1 from './img1.png';
import CardGroup from 'react-bootstrap/CardGroup';





const Home = () => {
  return(
      <div className="main-container" >
  <div className = "headhome"> 
  <h1 >  WELCOME TO RAILWAY BOOKING SYSTEM</h1>

  </div>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src={image2} />
    <Card.Body>
      <Card.Title>Easy Booking</Card.Title>
      <Card.Text>
      Book tickets easily, our service is designed minimalistic and very simple to use
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={image3} />
    <Card.Body>
      <Card.Title>on the go</Card.Title>
      <Card.Text>
      Book your tickets any time anywhere.Our train booking service is available 24/7
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title>Easy Payments</Card.Title>
      <Card.Text>
       Payments made easier on our booking service.You can use your paytm wallet or your credit cards.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
  </div>
  )
}

export default Home
            
            