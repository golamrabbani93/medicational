import React from 'react';

const SingleService = ({service, setService}) => {
	const {name, slots} = service;
	const modal = () => {
		document.getElementById('bookingModal').showModal();
	};
	const serviceSet = () => {
		setService(service);
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
					<button
						disabled={slots.length === 0}
						className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white"
						onClick={() => {
							modal();
							serviceSet();
						}}
					>
						Book Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleService;
