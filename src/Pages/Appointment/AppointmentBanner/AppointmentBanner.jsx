import React from 'react';
import bgchair from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import {DayPicker} from 'react-day-picker';
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
	return (
		<div
			className="hero min-h-[70vh] lg:w-[1363px] m-auto "
			style={{
				backgroundImage: `url(${bgchair})`,
			}}
		>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src={chair}
					className="max-w-[374px] m-auto md:m-0 lg:max-w-xl rounded-lg shadow-2xl"
					alt=""
				/>
				<div className="md:w-[540px]">
					<DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} />
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;
