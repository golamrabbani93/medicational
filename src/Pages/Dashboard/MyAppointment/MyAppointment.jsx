import React, {useContext} from 'react';
import {AuthContext} from '../../../Contexts/AuthProvider';
import {useQuery} from 'react-query';
import Loader from '../../Shared/Loader/Loader';
import {useNavigate} from 'react-router-dom';

const MyAppointment = () => {
	const navigate = useNavigate();
	// !get loged in User
	const {user} = useContext(AuthContext);

	// !create bookings Api
	const bookingUrl = `http://localhost:5000/booking?email=${user?.email}`;

	// !use React Query For Load Data
	const {data: userBookings = [], isLoading} = useQuery({
		queryKey: ['booking', user?.email],
		queryFn: async () => {
			const res = await fetch(bookingUrl, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('Token')}`,
				},
			});
			if (res.status === 403) {
				navigate('/login');
			}
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<div>
				<h3 className="text-2xl mb-6">My Appointment</h3>
			</div>
			<div>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead className="bg-base-300">
							<tr>
								<th></th>
								<th>Name</th>
								<th>Service</th>
								<th>Time</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							{userBookings.data.map((booking, ind) => (
								<tr key={booking._id}>
									<th>{ind + 1}</th>
									<td>{booking?.name}</td>
									<td>{booking?.treatment}</td>
									<td>{booking?.slot}</td>
									<td>{booking?.date}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyAppointment;
