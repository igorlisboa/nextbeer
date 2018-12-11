import React, {Component} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from 'reactstrap';
import Widget04 from '../../views/Widgets/Widget04'
import {getStyle} from '@coreui/coreui/dist/js/coreui-utilities'
import {Link} from "react-router-dom";

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')


class Dashboard extends Component {

  dadosMesaAberta = {};

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.criarMesa = this.criarMesa.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      modal: false,
      novaMesa: 'mesa ' + (this.mockData.mesas.length + 1),
      openModalMesa: false
    };
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  criarMesa() {
    this.mockData.mesas.push({
      nome: this.state.novaMesa,
      comandas: [
        {}
      ]
    });
    this.setState({
      novaMesa: 'mesa ' + (this.mockData.mesas.length + 1)
    });
    this.toggle()
  }


  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <span className="font-weight-bold font-4xl text-uppercase">Mesas/Atendimento</span>
                <Button color="primary" className="float-right align-middle" size="lg" onClick={this.toggle}>
                  <span className={'fa fa-plus'}></span>&nbsp;Add Mesa
                </Button>
              </CardHeader>
              <CardBody>

                <Row>

                  {
                    this.mockData.mesas.map((mesa, index) => {
                      return (
                        <Col xs="6" sm="6" lg="3">
                          <Link to={{pathname: '/mesas', dados: mesa}} className="clickable">
                            <Widget04
                              header={mesa.nome}
                              icon={'fa fa-cutlery'}
                              color={index % 2 > 0 ? 'indigo' : 'teal'}
                              value={'100'}
                              children={mesa.comandas.length > 1 ?
                                mesa.comandas.reduce((a, b) => a.total || a + b.total) : mesa.comandas[0].total || 0}
                              invert={true}
                              className="clickableHover clickable"
                            >
                            </Widget04>
                          </Link>
                        </Col>
                      )
                    })
                  }

                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/** Modal adicionar mesa*/}


        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Adicionar mesa</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="exampleEmail">Nome mesa</Label>
                <Input type="text" name="email" maxLength="20"
                       id="exampleEmail" placeholder="Nome da mesa"
                       value={this.state.novaMesa}
                       onChange={(event) => {
                         console.log(event.target.value);
                         this.setState({novaMesa: event.target.value})
                       }}/>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.criarMesa}>Criar Mesa</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        </div>

        {/** Modal de mesa aberta*/}

      </div>
    );
  }

  mockData = {
    mesas: [
      {
        nome: 'Mesa 1',
        comandas: [
          {
            total: 50
          },
          {
            total: 50
          },
          {
            total: 50
          },
          {
            total: 50
          },
        ]
      },
      {
        nome: 'mesa 2',
        comandas: [
          {
            total: 150
          },
        ]
      },
      {
        nome: 'mesa 3',
        comandas: [
          {
            total: 50
          },
          {
            total: 12
          },
          {
            total: 30
          }
        ]
      },
      {
        nome: 'mesa 4',
        comandas: [
          {
            total: 0
          },

        ]
      },
      {
        nome: 'mesa 5',
        comandas: [
          {
            total: 365.60
          },

        ]
      },
      {
        nome: 'mesa 6',
        comandas: [
          {
            total: 4
          },
          {
            total: 11
          },
        ]
      },
    ]
  }

}

export default Dashboard;
