import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row, Modal,ModalBody, ModalFooter,ModalHeader} from 'reactstrap';

import {CardapioSub} from './CardapioSub';
import IncluirEditarCardapio from './IncluirEditarCardapio';

class Cardapio extends Component{

  listaCardapios = [];

  constructor(){
    super();

    this.state = {
      isOpenModalIncluirEditar : false,
    };

    this.buscaCardapios = this.buscaCardapios.bind(this);
    this.novoCardapio = this.novoCardapio.bind(this);
    this.toggle = this.toggle.bind(this);

    this.listaCardapios = this.buscaCardapios();
  }

  toggle(x){
    console.log(x);
    this.novoCardapio();
  }

  novoCardapio(){
      this.setState({
        isOpenModalIncluirEditar: !this.state.isOpenModalIncluirEditar
      });
  }
                
  buscaCardapios(){
   return [
      {
        nome: "Drink's",
        img: "fa fa-glass",
        itens : [
          {nome : "teste",
          preco : 123,
          img : "some-url"},
          {nome : "teste",
            preco : 123,
            img : "some-url"},
          {nome : "teste",
            preco : 123,
            img : "some-url"},
          {nome : "teste",
            preco : 123,
            img : "some-url"},
        ],
        tema : 'bg-green'
      },
      {
        nome: "Comidas",
        img: "fa fa-cutlery",
        itens : [
          {nome : "teste2",
          preco : 1234,
          img : "some-url2"},
          {nome : "teste2",
            preco : 1234,
            img : "some-url2"},
        ],
        tema : 'bg-blue'
      },{
        nome: "Bebidas",
       img: "fa fa-beer",
       itens : [
         {nome : "teste3",
         preco : 12345,
         img : "some-url3"},
         {nome : "teste3",
           preco : 12345,
           img : "some-url3"},
         {nome : "teste3",
           preco : 12345,
           img : "some-url3"},
         {nome : "teste3",
           preco : 12345,
           img : "some-url3"},
         {nome : "teste3",
           preco : 12345,
           img : "some-url3"},
         {nome : "teste3",
           preco : 12345,
           img : "some-url3"},
       ],
       tema : 'bg-orange'
      },{
        nome: "Diversão",
       img: "fa fa-gamepad",
       itens : [
         {nome : "teste",
         preco : 123,
         img : "some-url"},
         {nome : "teste",
           preco : 123,
           img : "some-url"},
         {nome : "teste",
           preco : 123,
           img : "some-url"},
       ],
       tema : 'bg-red'
      },
    ];
  }

  render(){
    return (
      <div>
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="pb-2">
                  <i className="icons icon-book-open font-3xl align-middle"></i> <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Cardápios</span>
                  <Button color="primary" className="float-right align-middle" size="lg" onClick={this.novoCardapio}>Novo Cardápio</Button>
                  
              </CardHeader>
              <CardBody>
                <Row>
                    {
                      this.listaCardapios.length > 0 ?
                          this.listaCardapios.map(cardapio =>{
                              return (<CardapioSub dados={cardapio}></CardapioSub>)
                          })
                      :
                      <p>Nenhum cardápio registrado</p>
                    }
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
              {/*className={'modal-lg '+this.props.className}*/}

            <IncluirEditarCardapio open={this.state.isOpenModalIncluirEditar} toggle={this.toggle}/>
        

      </div>

    );
  }
}

export default Cardapio;
