import axios from 'axios';
import { store } from '../../index.js';
import { push } from 'react-router-redux';

// getUser action from login component
export const getUser = () => {
  return (dispatch) => {
    axios.get('/auth/user')
      .then( (response) => {
        const user = response.data;
        // console.log(response.data);
        // dispatch(updateUser(user));
      })
      .catch((error)=> {
        console.error("AJAX: Could not get user @ '/auth/user'")

      });
  };
}

// localSignup action from signup component
export const localSignup = (credentials) => {
  return(dispatch) => {
    axios.post('/auth/signup', credentials)
    // console.log('start of axios post to backend')
    .then((response) => {
      const data = response.data;
      dispatch(getUser());
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

// localLogin action from login component
export const localLogin = (credentials) => {
  return(dispatch) => {
    axios.post('/auth/login', credentials)
    .then((response) => {
      const data = response.data;
      // dispatch(getUser());
      if(data.error){
        console.log(data.message);
      }else {
        console.error("AJAX: Logged on @ '/auth/user'");
        //react-router-redux to dispatch routes from non-components
        store.dispatch(push('/dashboard'));
        // get user credentials here; dispatch notification as callback after user has been authenticated by passport
      }
    })
    .catch((error) => {
      console.error("AJAX: Logged on @ '/auth/login'");
      console.log(error);
    });
  }
}
