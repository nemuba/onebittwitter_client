import React, { Component } from 'react';
import TrendingTopics from '../../components/TrendingTopics';
import axios from 'axios';

class TrendingTopicsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hashtags: []
    };
  }

componentDidMount() {
  axios.get(`${ process.env.REACT_APP_API}/trending`)
  .then(response => {
    this.setState(()=>{
      console.log(response.data.hashtags);
      return { hashtags: response.data.hashtags}
    })
  })
  .catch(error => console.log(`Erro: ${error}`));
}

render() {
    return (
      <div>
        <TrendingTopics hashtags={this.state.hashtags} />
      </div>
    );
  }
}

export default TrendingTopicsContainer;