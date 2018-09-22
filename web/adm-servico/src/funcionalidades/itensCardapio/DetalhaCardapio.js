import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import ItemCardapio from "./ItemCardapio"

class DetalhaCardapio extends Component{

  constructor(){
    super();
  }

  render(){
    const dados = this.props.location.dados;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="pb-2">
                <i className="icons icon-book-open font-3xl align-middle"></i> <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Cardápios</span>
              </CardHeader>
              <CardBody>
                <Row>
                  {
                    dados ?
                    dados.map(item => {
                      return (
                        <ItemCardapio dados={item}></ItemCardapio>
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
    );
  }

}

export default DetalhaCardapio;
