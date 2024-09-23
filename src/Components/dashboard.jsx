import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidenav from './Sidenav';
import game1 from '../Assets/game1.jpg';
import sports1 from '../Assets/sports1.jpg';
import jersy1 from '../Assets/jersy1.jpg';

function Dashboard() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div style={{ display: 'flex' }}>
      <Col sm={2} style={{ padding: 0 }}>
        <Sidenav />
      </Col>
      <Col sm={10} style={{ padding: '5%' }}>
        <h1 style={{ textAlign: 'center' }}>
          <span style={{ color: 'blue' }}>Cric</span>
          <span style={{ color: 'green' }}>-kit</span>
        </h1>
        <h2 className="products-header" style={{ textAlign: 'center' }}>OUR PRODUCTS</h2>
        <Row>
          {/* Image Card 1 */}
          <Col sm={4}>
            <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center', border: '2px solid blue', transition: '0.3s' }}>
              <Card.Img variant="top" src={game1} />
              <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Button variant="primary" onClick={() => navigate('/game')}>INDOOR GAMES</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Image Card 2 */}
          <Col sm={4}>
            <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center', border: '2px solid blue', transition: '0.3s' }}>
              <Card.Img variant="top" src={sports1} />
              <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Button variant="primary" onClick={() => navigate('/sports')}>SPORTS</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Image Card 3 */}
          <Col sm={4}>
            <Card className="image-card" style={{ marginBottom: '20px', textAlign: 'center', border: '2px solid blue', transition: '0.3s' }}>
              <Card.Img variant="top" src={jersy1} />
              <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Button variant="primary" onClick={() => navigate('/jersy')}>EXCLUSIVE JERSEYs</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default Dashboard;
