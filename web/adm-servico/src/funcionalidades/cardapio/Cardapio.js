import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap';

import {CardapioSub} from './CardapioSub';
import IncluirEditarCardapio from './IncluirEditarCardapio';

export default class Cardapio extends Component{

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
        <IncluirEditarCardapio open={this.state.isOpenModalIncluirEditar} toggle={this.toggle}/>
      </div>

    );
  }

  //METODOS E FUNÇOES

  toggle(x){
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
            preco : 12.3,
            img : "some-url",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste",
            preco : 12.3,
            img : "some-url",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste",
            preco : 12.3,
            img : "some-url",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste",
            preco : 12.3,
            img : "some-url",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
        ],
        tema : 'bg-green'
      },
      {
        nome: "Comidas",
        img: "fa fa-cutlery",
        itens : [
          {nome : "teste2",
            preco : 12.34,
            img : "some-url2",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste2",
            preco : 12.34,
            img : "some-url2",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
        ],
        tema : 'bg-blue'
      },{
        nome: "Bebidas",
        img: "fa fa-beer",
        itens : [
          {nome : "teste3",
            preco : 123.45,
            img : "some-url3",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste3",
            preco : 123.45,
            img : "some-url3",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste3",
            preco : 123.45,
            img : "some-url3",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste3",
            preco : 123.45,
            img : "some-url3",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste3",
            preco : 123.45,
            img : "some-url3",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste3",
            preco : 123.45,
            img : "some-url3",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
        ],
        tema : 'bg-orange'
      },{
        nome: "Diversão",
        img: "fa fa-gamepad",
        itens : [
          {nome : "teste",
            preco : 12.3,
            img : "some-url",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste",
            preco : 12.3,
            img : "some-url",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
          {nome : "teste",
            preco : 12.3,
            img : "some-url",
            codigo : "a12",
            descricao : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar."
          },
        ],
        tema : 'bg-red'
      },
    ];
  }

}
