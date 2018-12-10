import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';
import {Card, CardHeader, CardBody, Row, Col} from "reactstrap";

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
      <div className="columns is-centered p-t-md p-r-md p-l-md">
        <div className="box">
          <h1 className="title">Comanda</h1>
          <div className="box">
            <div className="table">
              <table className="md-12">
                <thead>
                  <tr>
                    <th className="col-md-1">Pedidos</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Hamburguer</th>
                    <th>3</th>
                    <th>R$5,00</th>
                    <th>R$15,00</th>
                  </tr>
                  <tr>
                    <th>Colca Cola</th>
                    <th>2</th>
                    <th>R$3,50</th>
                    <th>R$7,00</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>R$22,00</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>


      </div>
    <div>
      <Card >
        <CardHeader>
          <span>Teste</span>
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <Card>
                <h1>Ola</h1>
              </Card>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>

  </GuestLayout>
);
