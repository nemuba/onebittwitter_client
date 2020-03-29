import React, { Component } from 'react'
import { Row, Col, CardPanel } from 'react-materialize';
import { LocalForm, Control } from 'react-redux-form';


class SignIn extends Component {

  render() {
  return (
    <Row>
    <Col s={12} offset="2">
      <CardPanel>
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
            <button type="submit" className="blue btn grey darken-2">Sign In</button>
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