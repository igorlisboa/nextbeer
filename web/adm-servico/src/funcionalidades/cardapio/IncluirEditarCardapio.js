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
import axios from 'axios';

class IncluirEditarCardapio extends Component{

  constructor(props){
    super(props);

    this.restricaoChange = this.restricaoChange.bind(this);
    this.state = {
      restricao : false,
      isOpen : false,
        nome: "",
        icone: "",
        itens: [],
        tema: ''
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
    let novoCardapio = {...this.state.novoCardapio};
    //   nome : "",
    //   icone : String,
    //   itens : [],
    //   tema : String
    // };

    console.log("============================================", this.state.novoCardapio)

    axios.post('http://localhost:8000/cardapio', {novoCardapio})
      .then(response => {
        console.log(response);
        console.log("salvou/alterou");
        this.toggle(event);
      }).catch(err =>{
      console.log(err);
      })

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
                          <Input  type="text" name="nome" id="nome" placeholder="Nome do Cardápio"  onChange={val => this.setState({nome : val})}/>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup row>
                        <Label for="icone" md={2}>Icone</Label>
                        <Col md={10}>
                          <Input type="select" name="icone" id="icone" onChange={(val)=>{this.setState({icone : val})}} >
                            <option value={'fa fa-glass'}>Taça</option>
                            <option value={'fa fa-cutlery'}>Garfo e faca</option>
                            <option value={'fa fa-beer'}>Cerveja</option>
                            <option value={'fa fa-gamepad'}>Joystick</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup row>
                        <Label for="Tema" md={2}>Tema</Label>
                        <Col md={10}>
                          <Input type="select" name="tema" id="tema" onChange={(val)=>{this.setState({icone : val})}} >
                            <option value={'bg-green'}>Verde</option>
                            <option value={'bg-blue'}>Azul</option>
                            <option value={'bg-orange'}>Amarelo</option>
                            <option value={'bg-red'}>Vermelho</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {
                      this.state.restricao ?
                        ''
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
      </div>
    );
  }
}

export default IncluirEditarCardapio;
