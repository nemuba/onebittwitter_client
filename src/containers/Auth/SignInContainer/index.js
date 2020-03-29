import React from 'react';
import SignIn from './../../../components/Auth/SignIn';
import {logIn} from './actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class SignInContainer extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(form) {
    this.props.logIn(form);
  }

  render() {
    return <SignIn handleSubmit={this.handleSubmit}/>
  }
}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({logIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);