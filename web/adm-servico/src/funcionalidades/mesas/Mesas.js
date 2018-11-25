import React, {Component} from 'react';
import {Badge, Button, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, Row} from 'reactstrap';

class Mesas extends Component{

  render(){
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="pb-2">
                <i className="icons icon-book-open font-3xl align-middle"></i> <span
                className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Comanda mesa 1</span>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6" className="card">
                    <div className="mt-1">
                      <Row>
                        <Col md="1">
                          <i className="icons icon-note font-2xl align-middle"></i>
                        </Col>
                        <Col md="5">
                          <div className="text-value">{"joao"}</div>
                        </Col>
                        <Col md="3">
                          <Button color="warning"
                                  className="w-100 float-right align-middle btn-normal text"><span>Alterar</span></Button>
                        </Col>
                        <Col md="3">
                          <Button color="danger"
                                  className="w-100 float-right align-middle btn-normal text"><span>Excluir</span></Button>
                        </Col>
                      </Row>
                    </div>
                    <div className="mt-1">
                      <Row>
                        <Col md="1">
                          <i className="icons icon-note font-2xl align-middle"></i>
                        </Col>
                        <Col md="5">
                          <div className="text-value">{"Monica"}</div>
                        </Col>
                        <Col md="3">
                          <Button color="warning"
                                  className="w-100 float-right align-middle btn-normal text"><span>Alterar</span></Button>
                        </Col>
                        <Col md="3">
                          <Button color="danger"
                                  className="w-100 float-right align-middle btn-normal text"><span>Excluir</span></Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col md="6" className="card">
                    <div className="mt-1">
                      <CardHeader>
                        <div className={""}>
                          <span className="w-100 font-weight-bold text-uppercase align-top">Comanda Joao</span>
                        </div>
                      </CardHeader>
                      <ListGroup>
                        <ListGroupItem className="justify-content-between">Chopp <Badge pill>x6</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Batata frita <Badge
                          pill>x2</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between">Hamburguer <Badge
                          pill>x1</Badge></ListGroupItem>
                      </ListGroup>
                      <div>
                        <Button color="danger" className="w-100 float-right align-middle btn-normal text"><span>Criar comanda</span></Button>
                      </div>
                    </div>
                  </Col>
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
