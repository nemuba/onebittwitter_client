import React from "react";
import { Row, Col } from 'react-materialize';
import MainLayout from './../MainLayout';
import UserInfoContainer from './../../containers/UserInfoContainer';
import TweetListContainer from './../../containers/TweetListContainer';
import TrendingTopicsContainer from './../../containers/TrendingTopicsContainer';

const ProfilePage = () => (
  <MainLayout>
    <Row>
      <Col s={12} m={3} l={3}>
        <UserInfoContainer/>
      </Col>
      <Col s={12} m={6} l={6}>
        <TweetListContainer/>
      </Col>
      <Col s={12} m={3} l={3}>
        <TrendingTopicsContainer/>
      </Col>
    </Row>
  </MainLayout>
);

export default ProfilePage;