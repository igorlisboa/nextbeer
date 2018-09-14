import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Jumbotron, Row} from 'reactstrap';
// import IncluirCardapio from "./incluir-cardapio";
// import Modal from "reactstrap/src/Modal";
// import ModalHeader from "reactstrap/src/ModalHeader";
// import ModalBody from "reactstrap/src/ModalBody";
// import ModalFooter from "reactstrap/src/ModalFooter";

const open = false;

class Cardapio extends Component{
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: false
  //   };
  //
  //   this.toggle = this.toggle.bind(this);
  // }
  //
  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }
  //
  // novoCardapio(){
  //   this.open = true;
  //   // const incluirCardapio = IncluirCardapio.prototype;
  //   // incluirCardapio.state = {modal : false};
  //   // return incluirCardapio.render();
  // };

  render(){


    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader className="pb-2">
                  <i className="icons icon-book-open font-3xl align-middle"></i> <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Cardápios</span>
                  <Button color="warning" className="float-right align-middle" size="lg"  onClick={this.novoCardapio.bind(this)}>Novo Cardápio</Button>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/*<IncluirCardapio modal={this.open}/>*/}

        {/*<Button color="danger" onClick={this.toggle}>click aqui</Button>*/}
        {/*<Modal isOpen={this.state.modal} toggle={this.toggle}>*/}
          {/*<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>*/}
          {/*<ModalBody>*/}
            {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.*/}
          {/*</ModalBody>*/}
          {/*<ModalFooter>*/}
            {/*<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}*/}
            {/*<Button color="secondary" onClick={this.toggle}>Cancel</Button>*/}
          {/*</ModalFooter>*/}
        {/*</Modal>*/}

      </div>
    );
  }
}

export default Cardapio;
