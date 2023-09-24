import React from 'react';
import {useParams} from 'react-router-dom';

const Payment = () => {
	const bookingId = useParams();
	console.log('🚀🚀: Payment -> bookingId', bookingId);
	return (
		<div>
			<div>
				<h3 className="text-2xl mb-6">Payment</h3>
			</div>
		</div>
	);
};

export default Payment;
