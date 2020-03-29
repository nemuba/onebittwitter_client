import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {register} from './actions';

import SignUp from './../../../components/Auth/SignUp';

class SignUpContainer extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(form) {
    this.props.register(form);
  }

  render() {
    return <SignUp handleSubmit={this.handleSubmit}/>
  }

}

function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({register}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);