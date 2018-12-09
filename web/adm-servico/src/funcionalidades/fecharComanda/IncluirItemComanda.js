import React, {Component} from 'react';
import {
  Button,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  UncontrolledDropdown,
  Label,

} from 'reactstrap';

class IncluirItemComanda extends Component {

  listaCardapios = [];

  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selecionaCategoria = this.selecionaCategoria.bind(this);

    this.listaCardapios = this.buscaCardapios();
  }

  toggle(event){
    console.log('DO');
  }

  selecionaCategoria(event){
    console.log(JSON.stringify(event.target.value))
  }

  render() {
    // this.props.open = true;
    let interator = [1,2,3,4,5,6,7,8,9,10];
    return (
      <Modal isOpen={true} toggle={this.toggle} centered={true} size={'lg'} backdrop={'static'}>

        <ModalHeader toggle={this.toggle} className="pb-2" >
          <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Adicionar Item do Cardápio</span>
        </ModalHeader>

        <ModalBody>


          <div className="text-center my-2">
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>Categoria</Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect" onChange={this.selecionaCategoria}>
                  {
                    this.listaCardapios.map(categoria => {
                      return (<option value={categoria.itens}>{categoria.nome}</option>)
                    })
                  }

                </Input>
              </Col>
            </FormGroup>
          </div>

          <div className="text-center my-2">
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>Itens</Label>
              <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect" onChange={this.selecionaCategoria}>
                  {
                    this.listaCardapios[0].itens.map(item => {
                      return (<option value={item}>{item.nome}</option>)
                    })
                  }

                </Input>
              </Col>
            </FormGroup>
          </div>
          <div className="text-center my-2">
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>Quantidade</Label>
              <Col sm={4}>
                <Input type="select" name="select" id="exampleSelect" onChange={this.selecionaCategoria}>
                  {
                    interator.map(i => {
                      return (<option value={i}>{i}</option>);
                    })
                  }
                </Input>
              </Col>
            </FormGroup>
          </div>
          <div>
            <Row>
              <Col>
                <Button color="success" className="float-left align-middle" size='lg' block>Adicionar</Button>
              </Col>
            </Row>
          </div>

        </ModalBody>

        <ModalFooter>

        </ModalFooter>


      </Modal>

    );
  }

  buscaCardapios(){

    return [
      {
        nome: "Drink's",
        icone: "fa fa-glass",
        itens: [
          {
            codigoProduto: "a12",
            nome: "Chopp",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-green'
      },
      {
        nome: "Comidas",
        icone: "fa fa-cutlery",
        itens: [
          {
            codigoProduto: "a12",
            nome: "teste",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-blue'
      },
      {
        nome: "Bebidas",
        icone: "fa fa-beer",
        itens: [
          {
            codigoProduto: "a12",
            nome: "teste",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-orange'
      },
      {
        nome: "Diversão",
        icone: "fa fa-gamepad",
        itens: [
          {
            codigoProduto: "a12",
            nome: "teste",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-red'
      }
    ]



    /*axios.get('http://localhost:8000/cardapio', {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'}
    })
      .then(response => {
        console.log(response)
      })
      .catch(err =>{
        console.log(err)
      });
    // fetch('http://localhost:8000/cardapio')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    // return true*/
  }

}

export default IncluirItemComanda;
