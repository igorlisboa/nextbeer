import React, {Component} from 'react';
import {Col} from "reactstrap";
import {Route, Redirect, Link} from "react-router-dom";
import {DetalhaCardapio} from "../itensCardapio";

export class CardapioSub extends Component{

  constructor(){
    super();
    // this.redirect = this.redirect.bind(this);
  }

  // redirect(){
  //   return (<Redirect path="/cardapio/detalha" component={DetalhaCardapio}/>);
  // } {/*onClick={this.redirect}*/}

  render(){
    const dados = this.props.dados;
    return (
        <Col md="4" className="nav-link">
          <Link to={{pathname :'/cardapio/detalhe', dados : dados.itens}}>
              <div className="brand-card clickable">
                <div className={dados.tema + " brand-card-header"}>
                  <i className={dados.img}></i>
                </div>
                <div className="brand-card-body">
                  <div>
                    <div className="text-value">{dados.nome}</div>
                  </div>
                </div>
              </div>
          </Link>
        </Col>
    );
  }


// <div>
// <Card>
// <CardBody>
// <CardTitle>Meu card</CardTitle>
// </CardBody>
// </Card>
// </div>

}
