
import React from 'react';
import { Col, Row } from 'react-bootstrap'; 
import Sidenav from '../Components/Sidenav';

function AboutUs() {
  return (
    <div className="maindata">
      <Row>
        <Col sm={2} className="sidenav-fixed">
          <Sidenav />
        </Col>
        <Col sm={10} className="content">
          <div className="about-content" style={{ paddingLeft: '20px' }}>
            <div className="about-text">
              <h1 className="page-header">About Us</h1>
              
              <h2 style={{ color: 'blue', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
                Overview
              </h2>
              <p className="page-text">
                Welcome to Cric-kit, your ultimate destination for all things sports! 
                At Cric-kit, we believe that sports are not just a game; they are a way of life. 
                Our mission is to provide sports enthusiasts with the best products, 
                resources, and information to enhance their sporting experience.
              </p>

              <h2 style={{ color: 'green', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
                History
              </h2>
              <p className="page-text">
                Cric-kit was founded in 2020 by a group of passionate sports lovers who wanted to create a platform 
                that caters to all sports enthusiasts. Over the years, we have grown from a small online store to a 
                comprehensive hub for sports gear and information, celebrating countless milestones along the way.
              </p>

              <h2 style={{ color: 'purple', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
                Goals
              </h2>
              <p className="page-text">
                Our goal is to foster a love for sports in our community by providing high-quality products 
                and promoting active lifestyles. We aim to continuously expand our offerings, engage with our customers, 
                and create an inclusive environment for all sports lovers.
              </p>

              <h2 style={{ color: 'orange', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
                Team
              </h2>
              <p className="page-text">
                Our team is made up of dedicated individuals who share a passion for sports. 
                From product experts to customer service representatives, each member plays a crucial role in ensuring 
                that our customers have the best experience possible. Together, we work hard to inspire and empower 
                athletes of all levels.
              </p>

            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;

