import API from '../../api.js';
import { UPDATE_USER_INFO } from '../UserInfoContainer/constants';


export function getUserInfo(id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.get(`/users/${id}`, { headers: headers });

  return (dispatch) => {
    request.then(
      resp => dispatch({ type: UPDATE_USER_INFO, payload: resp.data }),
      error => window.M.toast({html: 'Problem in get User Info', outDuration: 4000, classes: 'red rounded'})
    )
  };
}