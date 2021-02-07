import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { getSection } from '../ApiFile';

class Home extends Component {

  constructor(props) {
		super(props)

    this.state = {
      jsonFile: []
		};
	}

  componentDidMount(prevProps) {
    this.install_api()
  }

  async install_api(){
    let api = await getSection()
    this.setState({jsonFile: api})
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.jsonFile.map((item, index) => (
              <Col xs={12} md={6} lg={4} className="cards" key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item><Link to={{pathname: '/elements/:id', state: {id: item.id}}}>Петейти к каталогу</Link></ListGroup.Item>
                    <ListGroup.Item><Button variant="primary">Удалить</Button></ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home
