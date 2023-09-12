import {RouterProvider} from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import {Toaster} from 'react-hot-toast';

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
			<Toaster
				toastOptions={{
					success: {
						style: {
							background: '#19D3AE',
							position: 'top-right',
							// color: '#FFF',
							fontWeight: 'bolder',
						},
					},
					error: {
						style: {
							background: '#19D3AE',

							// color: '#fff',
							fontWeight: 'bolder',
						},
					},
				}}
			></Toaster>
		</div>
	);
}

export default App;
