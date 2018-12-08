import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap';

import {CardapioSub} from './CardapioSub';
import IncluirEditarCardapio from './IncluirEditarCardapio';

import axios from 'axios';

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

    // this.listaCardapios = this.buscaCardapios();
  }

  componentDidMount(){
    this.buscaCardapios();
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


    axios.get('http://localhost:8000/cardapio', {
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

    // return true
  }

}
