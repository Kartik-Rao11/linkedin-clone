import { auth, provider, storage } from "../firebase";
import db from "../firebase";
import { SET_USER, SET_LOADING_STATE, GET_ARTICLES } from "./actionsType";

export const setUser = (payload) => ({ //this the set user details of the new user
    type: SET_USER,
    user: payload,
  });

export function signInAPI() {
    return (dispatch) => { // for sigin 
      auth 
        .signInWithPopup(provider) // this function gives the pop up of google 
        .then((payload) => { // we get payload = details of the users - name email etc.
          dispatch(setUser(payload.user)); // dispatching means telling we have a user and we are seting new user through that dispatch
        })
        .catch((error) => alert(error.message));
    };
  }

export function getUserAuth() { // to get the user authentication
    return (dispatch) => { 
      auth.onAuthStateChanged(async (user) => { //on state change of user if user exist 
        if (user) {
          dispatch(setUser(user)); // dospatch the set user
        }
      });
    };
  }

export function signOutAPI() {
    return (dispatch) => {
      auth
        .signOut() // default functions of firebase to logout
        .then(() => {
          dispatch(setUser(null)); // then dispatch and set user to null
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  }