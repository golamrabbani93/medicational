import React, {useContext} from 'react';
import {AuthContext} from '../../../Contexts/AuthProvider';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const SingleService = ({service, setService}) => {
	const {name, slots} = service;
	// !Get User
	const {user} = useContext(AuthContext);
	const navigate = useNavigate();

	const userLogedIn = () => {
		if (user && user.uid) {
			setService(service);
		} else {
			toast.error('please Login First');
			navigate('/login');
		}
	};

	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<div className="card-body text-center">
				<h2 className="text-secondary text-xl font-semibold">{name}</h2>
				<p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
				<p>
					{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE
				</p>
				<div className="card-actions justify-center">
					{/* The button to open modal */}
					<label
						htmlFor="bookingModal"
						disabled={slots.length === 0}
						className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
						onClick={userLogedIn}
					>
						Book Appointment
					</label>
				</div>
			</div>
		</div>
	);
};

export default SingleService;
