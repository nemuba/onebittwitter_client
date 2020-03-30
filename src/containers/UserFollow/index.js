import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import InvisibleButton from './../../components/common/InvisibleButton';

class UserFollow extends Component {
  follow () {
    console.log('follow')
  }

  render(){
    return (
      <InvisibleButton onClick={this.follow}>
        <Icon small className="yellow-text text-darken-2 hoverable">star</Icon>
      </InvisibleButton>
    );
  }
}

export default UserFollow;