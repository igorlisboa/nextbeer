import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Jumbotron, Row} from 'reactstrap';

class Mesas extends Component{

  render(){
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="pb-2">
                  <i className="icons icon-book-open font-3xl align-middle"></i> <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Mesas</span>
                  <Button color="primary" className="float-right align-middle" size="lg" onClick="novoCardapio()">Nova Mesa</Button>
              </CardHeader>
              <CardBody>
                <Row>
                    <h1>FUNFOU</h1>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Mesas;
