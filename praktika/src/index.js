import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  {store}  from './store';
import {Provider} from 'react-redux';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createContext } from 'react';


firebase.initializeApp( {
  apiKey: "AIzaSyA7cuC5qh8vi50LDl7oVMJRYqEaq-kwtKc",
  authDomain: "chat-react-aa2e3.firebaseapp.com",
  projectId: "chat-react-aa2e3",
  storageBucket: "chat-react-aa2e3.appspot.com",
  messagingSenderId: "523825453268",
  appId: "1:523825453268:web:ba2415a2d328d931a24341",
  measurementId: "G-CX3EFY4JXZ"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot( document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider value={{
        firebase,
        auth,
        firestore
      }}>
      <App/>
      </Context.Provider>
    </Provider>
    </React.StrictMode>
);
reportWebVitals()
