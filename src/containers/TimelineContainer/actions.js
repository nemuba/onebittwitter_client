import API from '../../api.js';
import { UPDATE_USER_INFO } from '../UserInfoContainer/constants';
import { FETCH_TWEETS } from '../TweetListContainer/constants';

export function setUserInfo(user) {
  return ({ type: UPDATE_USER_INFO, payload: user });
}

export function getTimeline(id) {
  const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') };
  const request = API.get(`/timeline`, { headers: headers });

  return (dispatch) => {
    request
    .then(resp => dispatch({ type: FETCH_TWEETS, payload: resp.data }) )
    .catch( error => {
      window.M.toast({html:'Não foi possivel buscar os dados da Timeline',outDuration: 4000, classes: 'red rounded'});
      }
    );
  };
}