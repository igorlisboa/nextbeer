import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Jumbotron, Row, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


class Mesas extends Component{
  /*
  #controle de dropdown
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });

  }*/

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
                  <Card>
                    <CardHeader className="pb-2">
                      <span className="font-weight-bold font-2xl text-uppercase ml-3 align-middle">Mesa 1</span>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col>
                          <Button color="primary" className="float-right align-middle">Editar</Button>
                        </Col>
                        <Col>
                          <Button color="primary" className="float-right align-middle">Fechar</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <span className="font-weight-bold font-2xl text-uppercase ml-3 align-middle">Mesa 2</span>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col>
                          <Button color="primary" className="float-right align-middle">Editar</Button>
                        </Col>
                        <Col>
                          <Button color="primary" className="float-right align-middle">Fechar</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <span className="font-weight-bold font-2xl text-uppercase ml-3 align-middle">Mesa 3</span>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col>
                          <Button color="primary" className="float-right align-middle">Editar</Button>
                        </Col>
                        <Col>
                          <Button color="primary" className="float-right align-middle">Fechar</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="icons icon-pencil font-3xl align-middle"></i><span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Item Comanda</span>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col>
                      <div class="card-header">
                        <CardHeader>
                          <i className="icons icon-list font-2xl align-middle"></i><span className="font-weight-bold font-1xl text-uppercase ml-3 align-middle">Itens</span>
                        </CardHeader>
                        <CardBody>
                          <div class="table-responsive">
                            <table class="table table-striped">
                              <thead>
                                <tr>
                                  <th>Produto</th>
                                  <th>Preço</th>
                                  <th>Quantidade</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Chopp</td>
                                  <td>9,90</td>
                                  <td><span class="badge badge-primary badge-pill">10x</span></td>
                                  <td><Button color="danger" className="float-right align-middle">Excluir</Button></td>
                                </tr>
                                <tr>
                                  <td>Batata frita</td>
                                  <td>5,90</td>
                                  <td><span class="badge badge-primary badge-pill">2x</span></td>
                                  <td><Button color="danger" className="float-right align-middle">Excluir</Button></td>
                                </tr>
                                <tr>
                                  <td>Hamburguer</td>
                                  <td>13,90</td>
                                  <td><span class="badge badge-primary badge-pill">1x</span></td>
                                  <td><Button color="danger" className="float-right align-middle">Excluir</Button></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </CardBody>
                      </div>
                    </Col>
                    <Col>
                      <div className="card-header">
                        <CardHeader>
                          <i className="icons icon-settings font-2xl align-middle"></i><span className="font-weight-bold font-1xl text-uppercase ml-3 align-middle">Opções</span>
                        </CardHeader>
                        <CardBody>
                          <div class="text-center my-2">
                            <UncontrolledDropdown>
                              <DropdownToggle caret>ITENS</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem header>Escolha seu item</DropdownItem>
                                <DropdownItem>Chopp</DropdownItem>
                                <DropdownItem>Batata frita</DropdownItem>
                                <DropdownItem>Hamburguer</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                          <div className="text-center">
                            <UncontrolledDropdown>
                              <DropdownToggle caret>QUANTIDADE</DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>1</DropdownItem>
                                <DropdownItem>2</DropdownItem>
                                <DropdownItem>3</DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </div>
                          <div className="my-2">
                            <form>
                              <Col className="sm-12">
                                <FormGroup>
                                  <Input placeholder="Nome da comanda"/>
                                </FormGroup>
                              </Col>
                            </form>
                          </div>
                          <div>
                            <Row>
                              <Col>
                                <Button color="danger" className="float-right align-middle">Cancelar</Button>
                              </Col>
                              <Col>
                                <Button color="primary" className="float-left align-middle">Salvar</Button>
                              </Col>
                            </Row>
                          </div>
                        </CardBody>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Mesas;
