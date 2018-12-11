import React, {Component} from 'react';
import {Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, ListGroup, ListGroupItem, Row,} from 'reactstrap';
import Widget02 from "../../views/Widgets/Widget02";
import {Link} from "react-router-dom";

class Mesas extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    console.log('DO');
  }

  render() {
    // this.props.open = true;
    return (

      <div className="animated fadeIn">
        <Card>

          <CardHeader className="pb-2">
            <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Mesa 1</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle pl-xl-3">Senha: 4589</span>
            <Link to={{pathname: '/dashboard'}} className="clickable">
              <Button color="secondary" className="float-right align-middle" size="lg" >{'<< voltar'}</Button>
            </Link>

          </CardHeader>

          <CardBody>
            <Row>
              <Col md="4">
                <Widget02
                  variant="1"
                  icon="fa fa-user"
                  color="orange"
                  header={'COD.:     1'}
                  mainText={'João'}
                />
                <Widget02
                  variant="1"
                  icon="fa fa-user"
                  color="orange"
                  header={'COD.:     2'}
                  mainText={'Nome Cliente'}
                />
                <Widget02
                  variant="1"
                  icon="fa fa-user"
                  color="orange"
                  header={'COD.:     3'}
                  mainText={'Nome Cliente'}
                />
                <Widget02
                  variant="1"
                  icon="fa fa-user"
                  color="orange"
                  header={'COD.:     4'}
                  mainText={'Nome Cliente'}
                />

                <Widget02
                  variant="1"
                  icon="fa fa-plus"
                  color="success"
                  header={'Nova Comanda'}
                  mainText={'Adicionar nova comanda a mesa'}
                />
              </Col>
              <Col md="8">
                <div className="mt-1">
                  <CardHeader>
                    <div className={""}>
                      <span className="w-75 font-weight-bold text-uppercase align-top">Comanda 1 - João</span>
                      <span
                        className="w-25 font-weight-bold text-uppercase align-top float-right">Total:  R$ 64,89</span>
                    </div>
                  </CardHeader>
                  <ListGroup>
                    <ListGroupItem className="justify-content-between">
                    <span className="row">
                      <span className='col-md-4'>Chopp <Badge pill>x6</Badge></span>
                      <span className='col-md-3   '>R$ 30,90</span>
                      <span className='col-md-5'>
                        <Button color="danger" className="float-right align-middle mr-1" size="sm" onClick={() => {
                          alert('add mesa')
                        }}>
                          <span className={'fa fa-trash'}></span>&nbsp;Excluir
                        </Button>
                        <Button color="success" className="float-right align-middle  mr-1" size="sm" onClick={() => {
                          alert('')
                        }}>
                          <span className={'fa fa-plus'}></span>&nbsp;1
                        </Button>
                        <Button color="warning" className="float-right align-middle  mr-1" size="sm" onClick={() => {
                          alert('add mesa')
                        }}>
                          <span className={'fa fa-minus'}></span>&nbsp;1
                        </Button>
                      </span>
                    </span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                     <span className="row">
                      <span className='col-md-4'>Batata Frita <Badge pill>x2</Badge></span>
                      <span className='col-md-3   '>R$ 8,00</span>
                      <span className='col-md-5'>
                        <Button color="danger" className="float-right align-middle mr-1" size="sm" onClick={() => {
                          alert('add mesa')
                        }}>
                          <span className={'fa fa-trash'}></span>&nbsp;Excluir
                        </Button>
                        <Button color="success" className="float-right align-middle  mr-1" size="sm" onClick={() => {
                          alert('')
                        }}>
                          <span className={'fa fa-plus'}></span>&nbsp;1
                        </Button>
                        <Button color="warning" className="float-right align-middle  mr-1" size="sm" onClick={() => {
                          alert('add mesa')
                        }}>
                          <span className={'fa fa-minus'}></span>&nbsp;1
                        </Button>
                      </span>
                    </span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between"> <span className="row">
                      <span className='col-md-4'>Hamburguer <Badge pill>x1</Badge></span>
                      <span className='col-md-3   '>R$ 25,99</span>
                      <span className='col-md-5'>
                        <Button color="danger" className="float-right align-middle mr-1" size="sm" onClick={() => {
                          alert('add mesa')
                        }}>
                          <span className={'fa fa-trash'}></span>&nbsp;Excluir
                        </Button>
                        <Button color="success" className="float-right align-middle  mr-1" size="sm" onClick={() => {
                          alert('')
                        }}>
                          <span className={'fa fa-plus'}></span>&nbsp;1
                        </Button>
                        <Button color="warning" className="float-right align-middle  mr-1" size="sm" onClick={() => {
                          alert('add mesa')
                        }}>
                          <span className={'fa fa-minus'}></span>&nbsp;1
                        </Button>
                      </span>
                    </span>
                    </ListGroupItem>
                  </ListGroup>
                  <br/>
                  <div>

                    <Button color="primary"
                            className="w-50 align-middle btn-normal text"><span
                      className="fa fa-plus"></span> &nbsp;Adicinar item</Button>
                    <Button color="danger"
                            className="w-50 align-middle btn-normal text"><span
                      className="fa fa-money"></span> &nbsp; Finalizar Comanda</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>

        </Card>
      </div>

    );
  }
}

export default Mesas;
