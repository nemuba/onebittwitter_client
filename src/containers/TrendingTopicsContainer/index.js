import React, { Component } from 'react';
import TrendingTopics from './../../components/TrendingTopics';
import { getHashtags } from "./actions";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class TrendingTopicsContainer extends Component {

  componentDidMount(){
    this.props.getHashtags();
  }

render() {
    return (
      <div>
        <TrendingTopics hashtags={this.props.hashtags} />
      </div>
    );
  }
}

// mapeando os dados da store para os props
function mapStateToProps(state){
  return { hashtags: state.trendings.hashtags }
}

// conenctando as actions do component
function mapDispatchToProps (dispatch) {
  return bindActionCreators({getHashtags}, dispatch);
}

// conectando a store e passando as funções para o componente
export default connect(mapStateToProps, mapDispatchToProps)(TrendingTopicsContainer);