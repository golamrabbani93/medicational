import React from 'react';
import {useContext} from 'react';
import toast from 'react-hot-toast';
import {useQuery} from 'react-query';
import {Navigate, useLocation, useParams} from 'react-router-dom';
import {AuthContext} from '../../../Contexts/AuthProvider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOut from './CheckOut';
const stripePromise = loadStripe(
	'pk_test_51NtpOFBOLaOXSm4LuS89Q8odYmfFTfHgAl4ArobAyr5ttT58LsnRgXiyhU7g3KRnVGoEvo0LWudjUl6VGq3Yh2WZ00ku7FCX07',
);
const Payment = () => {
	const {logOut} = useContext(AuthContext);
	const {id} = useParams();
	const location = useLocation();
	const bookingURL = `http://localhost:5000/booking/${id}`;

	// !get booking by querry
	const {data: booking = []} = useQuery({
		queryKey: ['booking', id],
		queryFn: async () => {
			const res = await fetch(bookingURL, {
				headers: {
					authorization: `bearer ${localStorage.getItem('Token')}`,
				},
			});
			//! Token Expired
			if (res.status === 403) {
				toast.error('Token Expired');
				logOut();
				<Navigate to="/login" state={{from: location}} replace />;
			}
			const data = await res.json();
			return data.data;
		},
	});

	return (
		<div>
			<div>
				<h3 className="text-3xl mb-6">Payment</h3>
			</div>
			<div>
				<h3 className="text-2xl">Booking Information</h3>
				<p>Treatment Name: {booking?.treatment}</p>
				<p>Treatment Date: {booking?.date}</p>
				<p>Treatment Price: {booking?.price}</p>
			</div>
			<div className="w-96 mt-7">
				<Elements stripe={stripePromise}>
					<CheckOut booking={booking} />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
