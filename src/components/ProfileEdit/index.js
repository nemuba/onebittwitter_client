import React from "react";
import { Row, Col, CardPanel, Button } from 'react-materialize';
import MainLayout from '../MainLayout'
// import UserInfoContainer from '../../containers/UserInfoContainer';
// import TrendingTopicsContainer from '../../containers/TrendingTopicsContainer';
import { LocalForm, Control } from 'react-redux-form';
import styled from 'styled-components';

const ProfileImage = styled.img`
   margin-top: 10px;
   margin-bottom: 10px;
 `;

const ProfileEdit = (props) => (
  <MainLayout>
    <Row>
      <Col s={12} m={6} className="offset-m3">
        <CardPanel className="hoverable">
          <Row>
            <Col m={8} s={8} offset="">
              <b className="grey-text text-darken-1">Informações Pessoais</b>
            </Col>
          </Row>

          <Row>
            <Col m={12} s={12} offset="">
              <div className="form">
                <div>
                  <LocalForm
                    onSubmit={(values) => props.updateProfile(values)}
                    initialState={{
                      name: props.name,
                      email: props.email,
                      description: props.description,
                      id: props.id,
                    }}
                  >
                    <Control.text model=".name"
                      name="name"
                      placeholder="Nome"
                    />
                    <Control.text model=".email"
                      name="email"
                      placeholder="Email"
                    />
                    <Control.text model=".description"
                      name="description"
                      placeholder="Descrição..."
                    />
                    <div className="right">
                      <Button waves="light" node="button" className="blue btn darken-2">Atualizar</Button>
                    </div>
                  </LocalForm>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col m={8} s={8} offset="">
              <b className="grey-text text-darken-1">Mudar Senha</b>
            </Col>
          </Row>

          <Row>
            <Col m={12} s={12} offset="">
              <div className="form">
                <div>
                  <LocalForm
                    onSubmit={(values) => props.updatePassword(values)}
                    initialState={{
                      id: props.id,
                    }}
                  >
                    <Control.text model=".password"
                      type="password"
                      name="password"
                      placeholder="Senha"
                      autoComplete="new-password"
                    />
                    <Control.text model=".password_confirmation"
                      type="password"
                      name="password_confirmation"
                      placeholder="Senha(confirmação)"
                      autoComplete="new-password"
                    />
                    <div className="right">
                      <Button waves="light" node="button" className="blue btn darken-2">Atualizar Senha</Button>
                    </div>
                  </LocalForm>
                </div>
              </div>
            </Col>
          </Row>
        </CardPanel>
      </Col>
    </Row>
  </MainLayout>
);

export default ProfileEdit;