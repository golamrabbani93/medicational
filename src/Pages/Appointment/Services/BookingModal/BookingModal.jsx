import {format} from 'date-fns';
import React from 'react';

const BookingModal = ({service, setService, selectedDate}) => {
	const {name, slots} = service;
	const date = format(selectedDate, 'PP');
	const bookingData = (e) => {
		e.preventDefault();
		const data = e.target;
		const appointmentDetails = {
			date: date,
			treatment: name,
			name: data.name.value,
			phone: data.phone.value,
			email: data.email.value,
		};
		setService(null);
	};
	return (
		<div>
			{/* Put this part before </body> tag */}
			<input type="checkbox" id="bookingModal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box relative">
					<label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">
						✕
					</label>
					<h3 className="font-bold text-lg">{name}</h3>
					{/*  appointment data form */}
					<form onSubmit={bookingData} className="grid grid-cols-1 gap-6 mt-10">
						<input
							type="text"
							placeholder={date}
							className="input input-bordered w-full bg-accent"
							readOnly={true}
						/>
						<select name="slot" className="select select-bordered w-full">
							{slots.map((slot, ind) => (
								<option value={slot} key={ind}>
									{slot}
								</option>
							))}
						</select>
						<input
							name="name"
							type="text"
							placeholder="Full Name"
							className="input input-bordered w-full"
						/>
						<input
							name="phone"
							type="text"
							placeholder="Phone Number"
							className="input input-bordered w-full"
						/>
						<input
							name="email"
							type="email"
							placeholder="Email"
							className="input input-bordered w-full"
						/>
						<input type="submit" value={'submit'} className="btn btn-accent uppercase" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
