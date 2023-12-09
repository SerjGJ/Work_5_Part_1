import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBo3v8foO4ElhDn2Pu2tEQHOquFNddIG5c',
	authDomain: 'todolist-224e2.firebaseapp.com',
	projectId: 'todolist-224e2',
	storageBucket: 'todolist-224e2.appspot.com',
	messagingSenderId: '269072776804',
	appId: '1:269072776804:web:bee73b6105f993aeeea971',
	databaseURL: 'https://todolist-224e2-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
