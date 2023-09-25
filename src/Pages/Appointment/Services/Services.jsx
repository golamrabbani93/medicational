import {format} from 'date-fns';
import React, {useState} from 'react';
import SingleService from './SingleService';
import BookingModal from './BookingModal/BookingModal';
import {useQuery} from 'react-query';
import Loader from '../../Shared/Loader/Loader';

const Services = ({selectedDate}) => {
	// load Single appointment services
	const [service, setService] = useState(null);
	const date = format(selectedDate, 'PP');
	const {
		data: services = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['appointment', date],
		queryFn: async () => {
			const res = await fetch(`https://medicational-server.vercel.app/appointment?date=${date}`);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}
	return (
		<div>
			<div className="mt-10 lg:mt-14">
				<p className="text-secondary font-bold text-2xl text-center">
					Available Appointments on {date}
				</p>
			</div>
			<div className="lg:mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
				{services.data?.map((service) => (
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
					refetch={refetch}
				></BookingModal>
			)}
		</div>
	);
};

export default Services;
