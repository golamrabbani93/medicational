import {format} from 'date-fns';
import React from 'react';

const SingleService = ({service, date}) => {
	const {name, slots} = service;
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<div className="card-body text-center">
				<h2 className="text-secondary text-xl font-semibold">{name}</h2>
				<p> {format(date, 'PP')}</p>
				<p>{slots.length > 0 ? `${slots.length} SPACES AVAILABLE` : 'Try another day'}</p>
				<div className="card-actions justify-center">
					<button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">
						Book Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleService;
