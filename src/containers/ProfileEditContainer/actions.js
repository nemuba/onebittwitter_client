import API from '../../api.js';

export function updateUserInfo({ id, name, email, description, photo }) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const params = { "user": { name, email, description, photo } }
  const request = API.put(`/users/${id}`, params, { headers: headers });

  return (dispatch) => {
    request
    .then(resp => {
        window.M.toast({html:'Informações pessoais atualizado!', outDuration: 3000, classes: 'green rounded'});
      }
    )
    .catch(error => {
        window.M.toast({ html: 'Não foi possivel atualizar!', outDuration: 3000, classes: 'red rounded' });
      });
  };
}

export function updateUserPassword({ id, password, password_confirmation }) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const params = { "user": { password, password_confirmation } }
  const request = API.put(`/users/${id}`, params, { headers: headers });

  return (dispatch) => {
    request
      .then(resp => {
        window.M.toast({ html: 'Senha atualizada!', outDuration: 3000, classes: 'green rounded' });
      }
      )
      .catch(error => {
        window.M.toast({ html: 'Não foi possivel atualizar a senha!', outDuration: 3000, classes: 'red rounded' });
      });
  };
}