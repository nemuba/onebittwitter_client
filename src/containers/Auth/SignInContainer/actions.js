import { push } from 'connected-react-router';
import api from './../../../api';

export function logIn({email,password}) {

  const request = api.post('/user_token', {
    auth: {
      email,
      password
    }
  });

  return (dispatch) => {
    request
      .then(resp => {
        localStorage.setItem('jwt', resp.data.jwt);
        window.M.toast({ html: 'Logado com sucesso !', outDuration: 4000, classes: 'blue rounded' });
        dispatch(push('/timeline'))
      })
      .catch(() => {
        window.M.toast({ html: 'Email ou Senha incorreta !', outDuration: 4000, classes: 'red rounded darken-2' });
      });
  }
}
