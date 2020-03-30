import React, { Component } from 'react';
import TweetUnit from '../../components/TweetUnit';
import { deleteTweet } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class TweetListContainer extends Component {

  constructor(){
    super();
    this.deleteTweet = this.deleteTweet.bind(this);
  }

  deleteTweet(id){
    this.props.deleteTweet(id);
  }

  render() {
    const tweet_list = this.props.tweets.length ? (this.props.tweets) : []
    return (
      <div>
        {tweet_list.map((tweet, i) =>
          <TweetUnit {...tweet} key={i} deleteTweet={this.deleteTweet} current_user={this.props.current_user} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    current_user: state.current_user
    }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteTweet}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetListContainer);