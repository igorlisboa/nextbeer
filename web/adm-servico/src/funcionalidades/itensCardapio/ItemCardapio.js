import React, {Component} from "react";
import {Row, Col} from "reactstrap";

export default class ItemCardapio extends Component{

  render(){
    return (
      <div className="card-item-cardapio">
        <Row>
          <Col md="2" className="text-center">
            <div className="bg-gray-200">
              <img src="https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png" width="80px"/>
            </div>
          </Col>
          <Col md="8">
            <h4>23 | Batata Frita - Média</h4>
            <p>500gm de batata frita com queijo. Serve 3 pessoas.</p>
          </Col>
          <Col md="2" className="text-center">
            <h2>R$ 20,00</h2>
            <span><i className="fa fa-minus-circle font-2xl align-middle clickable"></i>&nbsp;QTD 0&nbsp;<i className="fa fa-plus-circle font-2xl align-middle clickable"></i></span>
          </Col>
        </Row>
      </div>
    )
  }

}
