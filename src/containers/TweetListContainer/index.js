import React, { Component } from 'react';
import TweetUnit from './../../components/TweetUnit';
import TweetNew from './../../components/TweetNew';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTweet, createTweet } from './actions.js';


class TweetListContainer extends Component {

  constructor() {
    super()
    this.deleteTweet = this.deleteTweet.bind(this);
    this.postTweet = this.postTweet.bind(this);
  }

  deleteTweet(id) {
    this.props.deleteTweet(id)
  }

  postTweet(event) {
    if (event.keyCode === 13) { // is enter key?
      this.props.createTweet(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    const tweet_list = this.props.tweets.length ? (this.props.tweets) : []
    return (
      <div>
        <TweetNew postTweet={this.postTweet} />
        {tweet_list.map((tweet, i) =>
          <TweetUnit {...tweet}
            key={i}
            deleteTweet={this.deleteTweet}
            current_user={this.props.current_user}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
    current_user: state.current_user,
    user: state.user
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTweet, createTweet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetListContainer);