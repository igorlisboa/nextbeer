import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import ItemCardapio from "./ItemCardapio";
import IncluirEditarCardapio from './IncluirEditarItemCardapio';

export default class DetalhaCardapio extends Component{

  state = {
    isOpenModalIncluirEditar : false
  }

  constructor(props){
    super(props);

    // BINDS
    this.novoItem = this.novoItem.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  render(){
    const dados = this.props.location.dados;
    return (
      <div>
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader className="pb-2">
                  <i className="icons icon-book-open font-3xl align-middle"></i> <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Cardápios</span>
                  <Button color="primary" className="float-right align-middle" size="lg" onClick={this.novoItem}>Novo Item</Button>
                </CardHeader>
                <CardBody>
                  <Row>
                    {
                      dados ?
                      dados.map(item => {
                        return (
                          <ItemCardapio dados={{...item}}></ItemCardapio>
                        );
                      })
                        :
                        <p>Nenhum item registrado</p>
                    }
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        {/*Modal Incluir*/}
        <IncluirEditarCardapio open={this.state.isOpenModalIncluirEditar} toggle={this.toggle}/>
        {/*this.state.isOpenModalIncluirEditar*/}
      </div>
    );
  }

  //METODOS E FUNÇOES

  novoItem(){
      this.setState({
        isOpenModalIncluirEditar: !this.state.isOpenModalIncluirEditar
      });
  }

  toggle(X){
    this.novoItem();
  }
}
