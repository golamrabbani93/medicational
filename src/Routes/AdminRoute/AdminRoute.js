import React, {useContext} from 'react';
import {AuthContext} from '../../Contexts/AuthProvider';
import {Navigate, useLocation} from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';
import UseAdmin from '../../hooks/UseAdmin';

const AdminRoute = ({children}) => {
	const {user, loader, logOut} = useContext(AuthContext);
	const [admin, adminLoading] = UseAdmin(user?.email);
	const location = useLocation();
	if (loader || adminLoading) {
		return <Loader></Loader>;
	}
	if (user && admin) {
		return children;
	}
	logOut();
	return <Navigate to="/login" state={{from: location}} replace />;
};

export default AdminRoute;
