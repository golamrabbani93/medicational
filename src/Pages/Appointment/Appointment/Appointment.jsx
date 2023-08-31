import React, {useState} from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';

const Appointment = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	return (
		<div>
			<AppointmentBanner
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			></AppointmentBanner>
			<Services selectedDate={selectedDate}></Services>
		</div>
	);
};

export default Appointment;
