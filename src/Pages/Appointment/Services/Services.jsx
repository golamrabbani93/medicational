import {format} from 'date-fns';
import React from 'react';

const Services = ({selectedDate}) => {
	return (
		<div>
			<div className="mt-10 lg:mt-14">
				<p className="text-secondary font-bold text-2xl text-center">
					Available Appointments on {format(selectedDate, 'PP')}
				</p>
			</div>
		</div>
	);
};

export default Services;
