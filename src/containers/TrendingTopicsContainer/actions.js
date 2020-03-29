import api from './../../api';
import { UPDATE_TRENDINGS } from './constants';

//* @action getHashtags
//* @type UPDATE_TRENDINGS
//* @return action = {type: UPDATE_TRENDINGS, payload: data}
export function getHashtags() {
  const request = api.get('/trending');

  return (dispatch) =>{
    request
    .then(resp => dispatch({type: UPDATE_TRENDINGS , payload: resp.data}))
    .catch(() => {
      window.M.toast({
        html: 'Fetch Error Trendings Topics !',
        outDuration: 4000,
        classes: 'red rounded'
      })
    });
  };
}