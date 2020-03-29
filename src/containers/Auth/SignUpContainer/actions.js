import API from './../../../api.js';
import { logIn } from './../SignInContainer/actions.js';

export function register({ name, email, password }) {
  const params = { "user": { name, email, password } }
  const request = API.post('/users', params);

  return (dispatch) => {
    request
    .then(resp => {
        window.M.toast({ html: `Logado com sucesso !`, outDuration: 4000, classes: 'blue rounded' });
        dispatch(logIn({ email, password }));
      })
    .catch(error => {
      window.M.toast({ html: `Dados inválidos !`, outDuration: 4000, classes: 'red rounded' });
    });
  };
}