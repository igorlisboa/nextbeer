import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {Route, Redirect, Link} from "react-router-dom";
import {DetalhaCardapio} from "../itensCardapio";
import IncluirEditarCardapio from './IncluirEditarCardapio';

export class CardapioSub extends Component{

  constructor(){
    super();

    this.state = {
      isOpenModalIncluirEditar : false
    }

    this.openEditar = this.openEditar.bind(this);
    this.toggle = this.toggle.bind(this);

  }

  toggle(x){
    console.log(x);
    this.openEditar();
  }

  openEditar(){
      this.setState({
        isOpenModalIncluirEditar: !this.state.isOpenModalIncluirEditar
      });
  }

  render(){
    const dados = this.props.dados;
    const styleEditarExcluit = {
      padding : 0,
      // border : '1px solid #000000',
      backgroundColor: '#dddddd',
      textAlign: 'center'
    };
    const styleRowOpcoes = {
      padding: '0 15px'
    }
    return (
        <Col md="4" className="nav-link">
            <div className="brand-card">
              <Link to={{pathname :'/cardapio/detalhe', dados : dados.itens}} className="clickable">
                <div className={dados.tema + " brand-card-header"}>
                  <i className={dados.img}></i>
                </div>
                <div className="brand-card-body">
                  <div>
                      <div className="text-value">{dados.nome}</div>
                  </div>
                </div>
              </Link>
                <div className="brand-card-footer">
                <Row style={styleRowOpcoes}>
                  <Col md="6" style={styleEditarExcluit}>
                    <div className="clickableHover" onClick={this.openEditar}>Editar</div>                  
                  </Col>
                  <Col md="6" style={styleEditarExcluit}>
                    <div className="clickableHover ">Excluir</div>                  
                  </Col>
                </Row>
                </div>
            </div>
            <IncluirEditarCardapio open={this.state.isOpenModalIncluirEditar} toggle={this.toggle} editar={this.dados}/>
        </Col>
    );
  }
}
