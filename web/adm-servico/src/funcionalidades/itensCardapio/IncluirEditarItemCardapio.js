import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";
import React, {Component} from "react";

export default class IncluirEditarCardapio extends Component {

  state = {
    restricao: false,
    isOpen: false,
    alcoolico: false,
    imageItem: {},
    itemDoCardapio: {
      codigo: '',
      nome: '',
      preco: '',
      descricao: '',
      cardapio: '',
      alcoolico: false,
      img: {
        url: '',
        nome: '',
        file: {}
      }
    }
  }

  constructor(props) {
    super(props);

    this.restricaoChange = this.restricaoChange.bind(this);

    if(this.props.itemDoCardapio){
      this.state.itemDoCardapio = {...this.props.itemDoCardapio}
    }

    // BIND
    this.toggle = this.toggle.bind(this);
    this.salvaAlteracao = this.salvaAlteracao.bind(this);
    this.editar = this.editar.bind(this);
    this.visualizaImg = this.visualizaImg.bind(this);
  }

  render() {
    return (<div className="animated fadeIn">

        <Modal
          isOpen={this.props.open}
          toggle={this.toggle}
          centered={true}
          size={'lg'}
          backdrop={'static'}
        >

          <ModalHeader toggle={this.toggle} className="pb-2">
            <i className="icons icon-book-open font-3xl align-middle"></i>
            <span className="font-weight-bold font-3xl text-uppercase ml-3 align-middle">{this.props.itemDoCardapio ? 'Editar' : 'Incluir'} Item</span>
          </ModalHeader>

          <ModalBody>
            <Form>
              <Row>
                <Col md={8}>
                  <FormGroup>
                    <Label for="nome">Código do Item</Label>
                    <Input value={this.state.itemDoCardapio.codigo} type="text" name="codItem" id="codItem" placeholder="Código do Item"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="nome">Nome do Item</Label>
                    <Input value={this.state.itemDoCardapio.nome} type="text" name="nomeItem" id="nomeItem" placeholder="Nome do Item"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="nome">Preço</Label>
                    <Input value={this.state.itemDoCardapio.preco} type="text" name="precoItem" id="precoItem" placeholder="Preço"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="nome">Descrição</Label>
                    <Input value={this.state.itemDoCardapio.descricao} type="text" name="descItem" id="descItem" placeholder="Descrição"/>
                  </FormGroup>
                  <FormGroup row check>
                    <Label check>
                      <span style={{marginRight : '20px'}}>Alcoólico</span> &nbsp;
                      <Input value={this.state.itemDoCardapio.alcoolico} type="checkbox"
                             onClick={()=>this.setState({ alcoolico : !this.state.alcoolico })}
                             name="alcoolicoItem"
                             id="alcoolicoItem"
                      />
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" onChange={this.visualizaImg} accept="image/*" multiple="false"/>
                    <FormText color="muted">A imagem deve medir 200x120 e ocupar no máximo 200mb.</FormText>
                  </FormGroup>
                  <div className="bg-gray-200" style={{width:'200px',height:'120px', margin: 'auto', textAlign: 'center'}}>
                    <img src="" alt=""
                         style={{maxWidth:'200px', maxHeight:'120px'}} id="imgPrevia"/>
                  </div>
                </Col>
              </Row>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" className=" m-1 float-right align-middle" size="lg"
                    onClick={this.toggle}>Cancelar</Button>{' '}
            <Button color="success" className="m-1 float-right align-middle" size="lg"
                    onClick={this.salvaAlteracao}>Salvar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  visualizaImg(value){
    console.log(value.target.result);


    let reader = new FileReader();

    reader.addEventListener('load', ()=>{
      document.getElementById('imgPrevia').src = reader.result;
    });

    if(value.target.files[0]){
      reader.readAsDataURL(value.target.files[0])
    }

    // this.state.itemDoCardapio.img.url = reader.readAsDataURL(value.target.files[0]);
    this.state.itemDoCardapio.img.url = value.target.value;
    console.log("teste converte", this.state.itemDoCardapio.img);
  }

  restricaoChange() {
    this.setState({restricao: !this.state.restricao});
  };

  salvaAlteracao(event) {
    // TODO colocar aqui a logica para salvar
    console.log("salvou/alterou");
    this.toggle(event);
  }

  toggle(event) {
    return (
      this.props.toggle(event)
    );
  }

  editar(event) {
    return (
      this.props.editar(event)
    );
  }
}

