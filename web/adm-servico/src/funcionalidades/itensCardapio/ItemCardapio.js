import React, {Component} from "react";
import {Row, Col} from "reactstrap";

export default class ItemCardapio extends Component{

  constructor(props){
    super(props);

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
            <span><i className="fa fa-minus-circle font-2xl align-middle clickable"></i>&nbsp;QTD 0&nbsp;<i className="fa fa-plus-circle font-2xl align-middle clickable"></i></span>
          </Col>
        </Row>
      </div>
    )
  }

}
