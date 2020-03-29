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
        dispatch(push('/timeline'))
      })
      .catch(() => {
        window.M.toast({
          html: 'Email or Password incorrect',
          outDuration: 4000,
          classes: 'red rounded'
        })
      });
  }
}
