import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { getElement } from '../ApiFile';

class Elements extends Component {

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
    let api = await getElement(this.props.location.state.id)
    await this.sortApi(api)
    this.setState({jsonFile: api})
  }

  async sortApi(arr){
    var i = 0;
    while (i < arr.length) {
      if (arr[i]['id_section'] !== this.props.location.state.id) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
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
                    <Card.Text>{item.content}</Card.Text>
                  </Card.Body>
                  <ListGroup variant="flush">
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
export default Elements
