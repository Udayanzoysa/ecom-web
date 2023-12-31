import React from 'react';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import {createRoot} from 'react-dom/client';
import App from './App';
import firebaseConfig from "./FireBaseConfig";
import ContextProvider from "./providers/ContextProvider";


firebase.initializeApp(firebaseConfig)
firebase.firestore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ContextProvider>
        <App/>
    </ContextProvider>
);