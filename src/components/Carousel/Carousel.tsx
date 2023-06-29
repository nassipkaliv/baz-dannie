import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../../App.css";


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://uploads-ssl.webflow.com/60edc0a8835d5b38bf11f03f/61cf08407b81c820ca000860_Logistics-Asset-Management.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Базы клиентов для логистических компаний</h3>
          <p>Купить!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.thestatesman.com/wp-content/uploads/2019/10/automobiles_ed.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>aabbabab.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.newscientist.com/wp-content/uploads/2019/06/18153152/medicineshutterstock_1421041688.jpg?width=1200"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          aabbabab
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/flat-background-with-green-trees-numerous-factory-chimneys-polluting-air-illustration_1284-61998.jpg"
          alt="4"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            aabbabab
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;