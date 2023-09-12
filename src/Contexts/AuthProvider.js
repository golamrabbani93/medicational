import React, {createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
	const user = 'hello';

	//! Sign up with email and password
	const userSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// !sign in with email and password
	const userSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const authInfo = {user, userSignUp, userSignIn};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
