import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Jumbotron, Row} from 'reactstrap';

class Cardapio extends Component{

  novoCardapio(){

  };

  render(){
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="pb-2">
                  <i className="icons icon-book-open font-3xl align-middle"></i> <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Cardápios</span>
                  <Button color="warning" className="float-right align-middle" size="lg" onClick="novoCardapio()">Novo Cardápio</Button>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cardapio;
