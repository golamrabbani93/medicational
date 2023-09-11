import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import SingleService from './SingleService';
import BookingModal from './BookingModal/BookingModal';

const Services = ({selectedDate}) => {
	// load all appointment services
	const [services, setServices] = useState(null);
	// load Single appointment services
	const [service, setService] = useState(null);

	useEffect(() => {
		fetch('appointmentOptions.json')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			<div className="mt-10 lg:mt-14">
				<p className="text-secondary font-bold text-2xl text-center">
					Available Appointments on {format(selectedDate, 'PP')}
				</p>
			</div>
			<div className="lg:mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
				{services &&
					services.map((service) => (
						<SingleService
							key={service._id}
							service={service}
							setService={setService}
						></SingleService>
					))}
			</div>
			{/* Start Modal */}
			{service && (
				<BookingModal
					service={service}
					setService={setService}
					selectedDate={selectedDate}
				></BookingModal>
			)}
		</div>
	);
};

export default Services;
