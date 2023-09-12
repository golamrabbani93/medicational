import React, {createContext, useEffect, useState} from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
	// !set sign in user
	const [user, setUser] = useState({});

	//! Sign up with email and password
	const userSignUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// !sign in with email and password
	const userSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// !Check Sign In user
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return () => unsubscribe();
	}, []);

	// !user Log out
	const logOut = () => {
		return signOut(auth);
	};

	const authInfo = {user, userSignUp, userSignIn, logOut};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
