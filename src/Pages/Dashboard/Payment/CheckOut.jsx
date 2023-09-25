import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, {useEffect} from 'react';
import {useState} from 'react';
const CheckOut = ({booking}) => {
	const {_id, name, email} = booking;
	const stripe = useStripe();
	const elements = useElements();
	// !Card Error Message
	const [cardError, SetCardError] = useState('');
	const [clientSecret, setClientSecret] = useState('');
	const [success, setSuccess] = useState('');
	const [processing, setProcessing] = useState(false);
	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch('http://localhost:5000/payment/create-payment-intent', {
			method: 'POST',
			headers: {
				authorization: `bearer ${localStorage.getItem('Token')}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				setClientSecret(data.clientSecret);
			});
	}, [booking]);

	// !get card data
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			SetCardError(error.message);
		} else {
			SetCardError('');
		}
		setProcessing(true);
		const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					name: name,
					email: email,
				},
			},
		});
		if (confirmError) {
			SetCardError(confirmError.message);
			return;
		}
		if (paymentIntent.status === 'succeeded') {
			const paymentData = {
				email: email,
				price: paymentIntent.amount / 100,
				transectionId: paymentIntent.id,
				cardNumber: paymentMethod.card.last4,
				bookingId: _id,
			};
			fetch('http://localhost:5000/payment', {
				method: 'POST',
				headers: {
					authorization: `bearer ${localStorage.getItem('Token')}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(paymentData),
			})
				.then((res) => res.json())
				.then((data) => {
					SetCardError('');
					setSuccess('Congrats! your payment completed');
				});
		}
		elements.getElement(CardElement).clear();
		setProcessing(false);
	};
	return (
		<div>
			{' '}
			<form onSubmit={handleSubmit}>
				<CardElement
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#424770',
								'::placeholder': {
									color: '#aab7c4',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>
				<button
					className="btn btn-sm btn-secondary mt-2"
					type="submit"
					disabled={!stripe || !clientSecret || processing}
				>
					Pay
				</button>
			</form>
			{cardError && <p className="text-red-500">{cardError}</p>}
			{success && (
				<div>
					<p className="text-green-500">{success}</p>
				</div>
			)}
		</div>
	);
};

export default CheckOut;
