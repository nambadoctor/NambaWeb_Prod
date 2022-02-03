import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAIJ-ATZ9hnrz1Z0nx8YhNG8eZU_fT5gnI',
    authDomain: 'ds-connect.firebaseapp.com',
    databaseURL: 'https://ds-connect.firebaseio.com',
    projectId: 'ds-connect',
    storageBucket: 'ds-connect.appspot.com',
    messagingSenderId: '418517212993',
    appId: '1:418517212993:web:e20960074145ac71854bc0',
    measurementId: 'G-16LSMFQG9F',
}; //this is where your firebase app values you copied will go

initializeApp(firebaseConfig);

export const auth = getAuth();
