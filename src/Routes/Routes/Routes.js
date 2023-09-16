import {createBrowserRouter} from 'react-router-dom';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Resgister/Login/Login';
import Main from '../../layouts/Main/Main';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import SignUp from '../../Pages/Resgister/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashBoardLayout from '../../layouts/DashBoardLayout/DashBoardLayout';
import DashBoard from '../../Pages/Dashboard/DashBoard/DashBoard';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/appointment',
				element: <Appointment></Appointment>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signup',
				element: <SignUp></SignUp>,
			},
		],
	},
	{
		path: '/dashboard',
		element: (
			<PrivateRoute>
				<DashBoardLayout></DashBoardLayout>
			</PrivateRoute>
		),
		children: [
			{
				path: '/dashboard',
				element: <DashBoard></DashBoard>,
			},
		],
	},
]);
export default router;
