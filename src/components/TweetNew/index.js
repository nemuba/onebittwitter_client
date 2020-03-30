import React from "react";
import { Col, CardPanel, Icon, TextInput } from 'react-materialize';
import RowNoBottomMargin from '../common/RowNoBottomMargin';


const TweetNew = (props) => (
  <CardPanel className="hoverable">
    <RowNoBottomMargin>
      <Col s={12}>
        <TextInput
          s={12} m={12} l={12}
          maxLength="200"
          label="Oque você está pensando?"
          validate inputClassName="text-red"
          icon={<Icon>send</Icon>}
          onKeyDown={(event) => props.postTweet(event)} />
      </Col>
    </RowNoBottomMargin>
  </CardPanel>
)

export default TweetNew;