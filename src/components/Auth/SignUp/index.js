import React, { Component } from 'react'
import { Row, Col, CardPanel, Button } from 'react-materialize';
import { LocalForm, Control } from 'react-redux-form';

class SignUp extends Component {

  render() {
    return (
      <Row style={{marginBottom: '120px'}}>
        <Col s={12} offset="2">
          <CardPanel>
            <h6 className="header">Criar conta</h6>
            <LocalForm onSubmit={(values) => this.props.handleSubmit(values)}>
              <Control.text model=".name"
                name="name"
                type="text"
                placeholder="Name"
              />
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
                <Button node="button" waves="light" className="blue btn darken-2">Criar Conta</Button>
              </div>
            </LocalForm>
          </CardPanel>
        </Col>
      </Row>
    );
  }
}

export default SignUp;