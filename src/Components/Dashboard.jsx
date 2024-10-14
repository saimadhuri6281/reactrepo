import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sidenav from './Sidenav';
import game1 from '../Assets/game1.jpg';
import game2 from '../Assets/game2.jpg';
import game3 from '../Assets/game3.jpg';
import sports1 from '../Assets/sports1.jpg';
import sports2 from '../Assets/sports2.jpg';
import sports3 from '../Assets/sports3.jpg';
import jersy1 from '../Assets/jersy1.jpg';
import jersy2 from '../Assets/jersy2.jpg';
import jersy3 from '../Assets/jersy3.jpg';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', position: 'relative', backgroundColor: '#6A0AD4', minHeight: '100vh' }}>
      <Col sm={2} style={{ padding: 0 }}>
        <Sidenav />
      </Col>
      <Col sm={10} style={{ padding: 0 }}>
        {/* Style for the dropping effect */}
        <style>{`
          @keyframes drop {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            60% {
              opacity: 1;
            }
            100% {
              transform: translateY(0);
            }
          }

          .drop-animation {
            display: inline-block;
            animation: drop 0.5s forwards;
            margin: 0 2px;
            font-size: 6rem;
            font-weight: bold;
            color: white;
          }

          .ball-container {
            display: inline-block;
            width: 60px;
            height: 60px;
            overflow: hidden;
            position: relative;
            top: -10px;
          }

          .ball-animation {
            width: 100%;
            height: auto;
            position: absolute;
            bottom: 0;
            left: 0;
            animation: drop 0.5s forwards;
          }

          .header {
            text-align: center;
            margin-top: 20px;
          }

          .products-section {
            margin-top: 20px;
          }

          .image-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            border: 2px solid blue;
            transition: 0.3s;
            background-color: white;
            border-radius: 8px;
          }

          .view-more {
            text-align: center;
            margin: 20px 0;
          }

          .view-more-button {
            background-color: #ff9800; /* Bright orange color */
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .view-more-button:hover {
            background-color: #f57c00; /* Darker shade on hover */
          }
        `}</style>

        {/* Heading Section */}
        <div className="header">
          <h1>
            {['s', 'p', 
              <span className="ball-container" key="ball">
                <img src={sports2} alt="ball" className="ball-animation" />
              </span>, 
              'r', 't', 'z'].map((letter, index) => (
              <span 
                key={index} 
                className="drop-animation" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        <div className="products-section">
          <h2 className="products-header" style={{ textAlign: 'center', color: 'white' }}>
            OUR PRODUCTS
          </h2>

          {/* Indoor Games Section */}
          <Row>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={game1} />
                <Card.Body>
                  <Card.Title>Indoor Game 1</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={game2} />
                <Card.Body>
                  <Card.Title>Indoor Game 2</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={game3} />
                <Card.Body>
                  <Card.Title>Indoor Game 3</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="view-more">
            <button className="view-more-button" onClick={() => navigate('/game')}>View More Indoor Games</button>
          </div>

          {/* Sports Section */}
          <Row>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={sports1} />
                <Card.Body>
                  <Card.Title>Sports Item 1</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={sports2} />
                <Card.Body>
                  <Card.Title>Sports Item 2</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={sports3} />
                <Card.Body>
                  <Card.Title>Sports Item 3</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="view-more">
            <button className="view-more-button" onClick={() => navigate('/sports')}>View More Sports</button>
          </div>

          {/* Jerseys Section */}
          <Row>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={jersy1} />
                <Card.Body>
                  <Card.Title>Jersey 1</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={jersy2} />
                <Card.Body>
                  <Card.Title>Jersey 2</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" src={jersy3} />
                <Card.Body>
                  <Card.Title>Jersey 3</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="view-more">
            <button className="view-more-button" onClick={() => navigate('/jersy')}>View More Jerseys</button>
          </div>
        </div>
      </Col>
    </div>
  );
}

export default Dashboard;
