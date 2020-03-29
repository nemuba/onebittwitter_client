import axios from 'axios';

//* @action getHashtags
//* @type 'UPDATE_TRENDINGS'
export function getHashtags() {
  const request = axios.get(`${process.env.REACT_APP_API}/trending`);

  return (dispatch) =>{
    request.then(resp => dispatch({type: 'UPDATE_TRENDINGS', payload: resp.data}),
                  error => window.M.toast({
                    html: 'Fetch Error Trendings Topics !',
                    outDuration: 4000,
                    classes: 'red rounded'
                  })
    );
  };
}