import React, { Component } from 'react'
import { Row, Col, CardPanel, Button } from 'react-materialize';
import { LocalForm, Control } from 'react-redux-form';


class SignIn extends Component {

  render() {
  return (
    <Row>
    <Col s={12} offset="2">
    <CardPanel>
      <h6 className="header">Entrar</h6>
      <div className="form">
        <div>
        <LocalForm onSubmit={(values) => this.props.handleSubmit(values) }>
          <Control.text model=".email"
            name="email"
            type="text"
            placeholder="Email"
          />

          <Control.text model=".password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className="text-right">
            <Button node="button" waves="light" className="blue btn darken-2">Login</Button>
          </div>
          </LocalForm>
          </div>
        </div>
        </CardPanel>
      </Col>
      </Row>
    );
  }
}

export default SignIn;