import axios from 'axios';
import { store } from '../../index.js';
import { push } from 'react-router-redux';

// Local signup action from signup component
export const localSignup = (credentials) => {
  return(dispatch) => {
    axios.post('/auth/signup', credentials)
    // console.log('start of axios post to backend')
    .then((response) => {
      const data = response.data;
      //dispatch(getUser());
      if(data.error){
        console.log(data.message);

      }else {
        console.error("AJAX: Logged on @ '/auth/user'");
        //react-router-redux to dispatch routes from non-components
        store.dispatch(push('/login'));

      }
    })
    .catch((error) => {
      console.error("AJAX: Logged on @ '/auth/signup'");
      console.log('error: '+ error.message)

    });
  }
}
