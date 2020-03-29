import axios from 'axios';
import { UPDATE_TRENDINGS } from './constants';

//* @action getHashtags
//* @type UPDATE_TRENDINGS
//* @return action = {type: UPDATE_TRENDINGS, payload: data}
export function getHashtags() {
  const request = axios.get(`${process.env.REACT_APP_API}/trending`);

  return (dispatch) =>{
    request.then(resp => dispatch({type: UPDATE_TRENDINGS , payload: resp.data}),
                  error => window.M.toast({
                    html: 'Fetch Error Trendings Topics !',
                    outDuration: 4000,
                    classes: 'red rounded'
                  })
    );
  };
}