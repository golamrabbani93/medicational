import {createBrowserRouter} from 'react-router-dom';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Resgister/Login/Login';
import Main from '../../layouts/Main/Main';

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
				path: '/login',
				element: <Login></Login>,
			},
		],
	},
]);
export default router;
