import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row} from 'reactstrap';

import {CardapioSub} from './CardapioSub';
import IncluirEditarCardapio from './IncluirEditarCardapio';

import axios from 'axios';

export default class Cardapio extends Component{

    constructor(){
    super();

    this.state = {
      isOpenModalIncluirEditar : false,
      listaCardapios : []
    };

    this.buscaCardapios = this.buscaCardapios.bind(this);
    this.novoCardapio = this.novoCardapio.bind(this);
    this.toggle = this.toggle.bind(this);
    // this.buscaCardapios();

     this.buscaCardapios();
  }

  render(){
    return (
      <div>

        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader className="pb-  2">
                    <i className="icons icon-book-open font-3xl align-middle"></i> <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Cardápios</span>
                    <Button color="primary" className="float-right align-middle" size="lg" onClick={this.novoCardapio}>Novo Cardápio</Button>
                </CardHeader>
                <CardBody>
                  <Row>
                      {
                        this.state.listaCardapios && this.state.listaCardapios.length > 0 ?
                            this.state.listaCardapios.map(cardapio =>{
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
        this.setState({ listaCardapios : response.data.success.cardapio});
      })
      .catch(err =>{
        console.log(err)
        alert('erro na consulta ' + err)
      });
  }

}
