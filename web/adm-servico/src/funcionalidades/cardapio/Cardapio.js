import React, {Component} from 'react';
import Row from "reactstrap/src/Row";
import Col from "reactstrap/src/Col";
import Card from "reactstrap/src/Card";
import CardHeader from "reactstrap/src/CardHeader";
import CardBody from "reactstrap/src/CardBody";
import Jumbotron from "reactstrap/src/Jumbotron";
import Button from "reactstrap/src/Button";

class Cardapio extends Component{
  render(){
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="icons icon-book-open"></i><strong>Cardápio</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/jumbotron/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
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
      </div>
    );
  }
}

export default Cardapio;
