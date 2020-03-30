import API from '../../api.js';
import { DELETE_TWEETS } from './constants';

export function deleteTweet(id) {
  const headers = {
    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
  };
  const request = API.delete(`/tweets/${id}`, {
    headers: headers
  });

  return (dispatch) => {
    request
      .then(resp => {
        dispatch({ type: DELETE_TWEETS, payload: id});
        window.M.toast({html:'Excluido com sucesso !', outDuration: 4000, classes: 'green rounded'});
      })
      .catch(error => {
        window.M.toast({
          html: 'Não foi possivel deletar seu Tweet',
          outDuration: 4000,
          classes: 'red rounded'
        })
      })
  };
}