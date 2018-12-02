import React, {Component} from "react";
import {Row, Col, Button} from "reactstrap";
import IncluirEditarCardapio from "./IncluirEditarItemCardapio";

export default class ItemCardapio extends Component{

  constructor(props){
    super(props);

    //STATE INIT
    this.state = {
      isOpenModalIncluirEditar : false,
    };

    //Binds
    console.log(this.props.dados);

  }

  render(){
    return (
      <div className="card-item-cardapio">
        <Row>
          <Col md="2" className="text-center">
            <div className="bg-gray-200">
              <img src="https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png" width="80px" alt={""}/>
            </div>
          </Col>
          <Col md="8">
            <h4>{this.props.dados.codigo} | {this.props.dados.nome}</h4>
            <p>{this.props.dados.descricao}</p>
          </Col>
          <Col md="2" className="text-center">
            <h2>{this.props.dados.preco}</h2>
            <Row style={styleItens.buttonContainer}>
              <Col md={'12'}>
                <Button color="warning" size="sm" block onClick={this.editarItem}>EDITAR</Button>
              </Col>
            </Row>

            <Row style={styleItens.buttonContainer}>
              <Col md={'12'}>
                <Button color="danger" size="sm" block>EXCLUIR</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <IncluirEditarCardapio open={this.state.isOpenModalIncluirEditar} toggle={this.toggle}/>
      </div>
    )
  }

  //METODOS E FUNÇÕES
  editarItem(){
    this.setState({
      isOpenModalIncluirEditar: !this.state.isOpenModalIncluirEditar
    });
  }

  toggle(X){
    this.editarItem();
  }
}

const styleItens = {
  buttonContainer : {
    marginBottom : '5px',
    marginTop : '5px',
  }
}
