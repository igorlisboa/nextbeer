import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';
import { Card, CardHeader, CardBody, Row, Col, Table, Button,
Form, FormGroup, Label, Input } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Column = (props) => {
  const { title, description, link } = props;
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {title}
          </p>
        </header>

      </div>
    </div>
  );
};
Column.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default () => (
  <GuestLayout>
    <div className="container">
    <Card className="mb-3">
        <CardHeader>Login</CardHeader>
        <CardBody>
          <Form inline>
          
            <FormGroup>
              <Label for="exampleEmail" className="mr-3">Mesa</Label>
              <Input type="password" className="mr-3" name="mesa" id="exampleEmail" placeholder="Número da mesa" />
            </FormGroup>
            
            <FormGroup>
              <Label for="examplePassword" className="mr-3">Senha</Label>
              <Input type="password" className="mr-3" name="senha" id="examplePassword" placeholder="Senha da mesa" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>

      <Card className="w-100 mb-3">
        <CardHeader>Comanda</CardHeader>
        <CardBody className="">
          <Table bordered className="col-12">
            <thead>
              <tr>
                <th>Pedidos</th>
                <th>Quantidade</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Hamburguer</th>
                <th className="text-center">3</th>
                <th>R$15,00</th>
              </tr>
              <tr>
                <th>Colca Cola</th>
                <th className="text-center">2</th>
                <th>R$7,00</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th>R$22,00</th>
              </tr>
            </tbody>

          </Table>
        </CardBody>
      </Card>

      <Card className="mb-3">
        <CardHeader>Cardapio
          </CardHeader>
        <CardBody>
          Cardapio 1
          Cardapio 2
          Cardapio 3
          Cardapio 4
            </CardBody>
      </Card>

      



    </div>

  </GuestLayout>
);
