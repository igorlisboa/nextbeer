import {Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        Col,
        Form,
        FormGroup,
        Input,
        Label,
        Row,
        Modal,
        ModalBody,
        ModalHeader,
        ModalFooter        } from "reactstrap";
import React, {Component} from "react";

class IncluirEditarCardapio extends Component{

  constructor(props){
    super(props);

    this.restricaoChange = this.restricaoChange.bind(this);
    this.state = {
      restricao : false,
      isOpen : false
    };

    this.toggle = this.toggle.bind(this);
    this.salvaAlteracao = this.salvaAlteracao.bind(this);
    this.editar = this.editar.bind(this);
  }

  restricaoChange(){
    this.setState({restricao : !this.state.restricao});
  };

  salvaAlteracao(event){
    // TODO colocar aqui a logica para salvar
    console.log("salvou/alterou");
    this.toggle(event);
  }

  toggle(event){
    return (
      this.props.toggle(event)
    );
  }

  editar(event){
      return(
        this.props.editar(event)
      );
  }

  render(){
    return (  <div className="animated fadeIn">

        <Modal 
              isOpen={this.props.open} 
              toggle={this.toggle} 
              centered={true}
              size={'lg'}
              backdrop={'static'}
        >

              <ModalHeader toggle={this.toggle} className="pb-2">
                <i className="icons icon-book-open font-3xl align-middle"></i>
                <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">{this.props.cardapio ? 'Editar':'Incluir'} Cardápio</span>
              </ModalHeader>

              <ModalBody>
                <Form>
                  <Row>
                    <Col md={12}>
                      <FormGroup row>
                        <Label for="nome" md={2}>Nome cardápio</Label>
                        <Col md={10}>
                          <Input  type="text" name="nome" id="nome" placeholder="Nome do Cardápio"/>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <FormGroup row>
                        <Label for="icone" md={2}>Icone</Label>
                        <Col md={10}>
                          <Input type="select" name="icone" id="icone">
                            {

                            }
                            <option>5</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <FormGroup row check>
                        <Label check >
                          <Input type="checkbox" value={this.state.restricao} onClick={this.restricaoChange}/>
                          Com restrição
                        </Label>
                      </FormGroup>
                    </Col>
                    {
                      this.state.restricao ?
                        <Col md={10}>
                          <FormGroup row>
                            <Label for="exampleText">Descrição</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                          </FormGroup>
                        </Col>
                        : ''
                    }
                  </Row>
                </Form>
              </ModalBody>

              <ModalFooter>
                {/* <Row>
                  <Col md={12}> */}
                    <Button color="secondary" className=" m-1 float-right align-middle"  size="lg" onClick={this.toggle}>Cancelar</Button>{' '}
                    <Button color="success" className="m-1 float-right align-middle" size="lg" onClick={this.salvaAlteracao}>Salvar</Button>{' '}
                  {/* </Col>
                </Row> */}
              </ModalFooter>

        </Modal>


        {/* <Row>
          <Col>
            <Card>
              <CardHeader className="pb-2">
                <i className="icons icon-book-open font-3xl align-middle"></i>
                <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">{this.props.cardapio ? 'Editar':'Incluir'} Cardápio</span>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md={12}>
                      <FormGroup row>
                        <Label for="nome" md={2}>Nome cardápio</Label>
                        <Col md={10}>
                          <Input  type="text" name="nome" id="nome" placeholder="Nome do Cardápio"/>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <FormGroup row>
                        <Label for="icone" md={2}>Icone</Label>
                        <Col md={10}>
                          <Input type="select" name="icone" id="icone">
                            {

                            }
                            <option>5</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2}>
                      <FormGroup row check>
                        <Label check >
                          <Input type="checkbox" value={this.state.restricao} onClick={this.restricaoChange}/>
                          Com restrição
                        </Label>
                      </FormGroup>
                    </Col>
                    {
                      this.state.restricao ?
                        <Col md={10}>
                          <FormGroup row>
                            <Label for="exampleText">Descrição</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                          </FormGroup>
                        </Col>
                        : ''
                    }
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col md={12}>
                    <Button color="secondary" className=" m-1 float-right align-middle"  size="lg">Cancelar</Button>{' '}
                    <Button color="success" className="m-1 float-right align-middle" size="lg">Salvar</Button>{' '}
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default IncluirEditarCardapio;
