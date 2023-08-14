import React from 'react';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { createRoot } from 'react-dom/client';
import App from './App';
import firebaseConfig from "./FireBaseConfig";


firebase.initializeApp(firebaseConfig)
firebase.firestore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);