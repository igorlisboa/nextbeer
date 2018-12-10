import React, {Component} from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from 'reactstrap';

class FecharComanda extends Component {

  listaCardapios = [];

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selecionaCategoria = this.selecionaCategoria.bind(this);

    this.listaCardapios = this.buscaCardapios();
  }

  toggle(event) {
    console.log('DO');
  }

  selecionaCategoria(event) {
    console.log(JSON.stringify(event.target.value))
  }

  render() {
    // this.props.open = true;
    let interator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <Modal isOpen={true} toggle={this.toggle} centered={true} size={'lg'} backdrop={'static'}>

        <ModalHeader toggle={this.toggle} className="pb-2">
          <span className="font-weight-bold font-4xl text-uppercase ml-3 align-middle">Fechar Comandas</span>
        </ModalHeader>
        <ModalBody>
          <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
            <tr>
              <th>COMANDA</th>
              <th className="text-center">VAL. TOTAL</th>
              <th>PAGANDO</th>
              <th className="text-center">FALTA PAGAR</th>
              <th> </th>
            </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <div className="text-muted">
                      Cod.:1 João
                    </div>
                  </td>
                  <td className="text-center">
                    R$ 64,89
                  </td>
                  <td className="text-center">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>R$</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Valor a pagar"/>
                      <InputGroupAddon addonType="append"><Button color="primary">OK</Button></InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td className="text-center">
                    R$ 64,89
                  </td>
                  <td>
                    <Button color="secondary" disabled>Finalizar</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="text-muted">
                      Cod.:2 Nome Cliente
                    </div>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td className="text-center">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>R$</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Valor a pagar"/>
                       <InputGroupAddon addonType="append"><Button color="primary">OK</Button></InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td>
                    <Button color="secondary" disabled>Finalizar</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="text-muted">
                      Cod.:3 Nome Cliente
                    </div>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td className="text-center">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>R$</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Valor a pagar"/>
                       <InputGroupAddon addonType="append"><Button color="primary">OK</Button></InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td>
                    <Button color="secondary" disabled>Finalizar</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="text-muted">
                      Cod.:4 Nome Cliente
                    </div>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td className="text-center">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>R$</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Valor a pagar"/>
                       <InputGroupAddon addonType="append"><Button color="primary">OK</Button></InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td>
                    <Button color="secondary" disabled>Finalizar</Button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="text-muted">
                      Cod.:5 Nome Cliente
                    </div>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td className="text-center">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>R$</InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Valor a pagar"/>
                       <InputGroupAddon addonType="append"><Button color="primary">OK</Button></InputGroupAddon>
                    </InputGroup>
                  </td>
                  <td className="text-center">
                    R$ 0,00
                  </td>
                  <td>
                    <Button color="secondary" disabled>Finalizar</Button>
                  </td>
                </tr>

            </tbody>
          </Table>

        </ModalBody>

        <ModalFooter>

        </ModalFooter>


      </Modal>

    );
  }

  buscaCardapios() {

    return [
      {
        nome: "Drink's",
        icone: "fa fa-glass",
        itens: [
          {
            codigoProduto: "a12",
            nome: "Chopp",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-green'
      },
      {
        nome: "Comidas",
        icone: "fa fa-cutlery",
        itens: [
          {
            codigoProduto: "a12",
            nome: "teste",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-blue'
      },
      {
        nome: "Bebidas",
        icone: "fa fa-beer",
        itens: [
          {
            codigoProduto: "a12",
            nome: "teste",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-orange'
      },
      {
        nome: "Diversão",
        icone: "fa fa-gamepad",
        itens: [
          {
            codigoProduto: "a12",
            nome: "teste",
            preco: "12.3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales venenatis turpis ullamcorper consectetur. Vivamus fermentum nunc ipsum, at pulvinar.",
            imagens: [
              {
                path: "https://pizzariatop10.com.br/pedido-online/image/cache/data/produtos/p.batata.fw-600x600.png"
              }
            ]
          }
        ],
        tema: 'bg-red'
      }
    ]

  }

}

export default FecharComanda;
