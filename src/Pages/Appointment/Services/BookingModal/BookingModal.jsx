import {format} from 'date-fns';
import React, {useContext} from 'react';
import {AuthContext} from '../../../../Contexts/AuthProvider';
import {toast} from 'react-hot-toast';

const BookingModal = ({service, setService, selectedDate, refetch}) => {
	// !user data
	const {user} = useContext(AuthContext);
	const {name, slots} = service;
	const date = format(selectedDate, 'PP');
	const bookingData = (e) => {
		e.preventDefault();
		const form = e.target;
		const appointmentDetails = {
			date: date,
			treatment: name,
			name: form.name.value,
			email: form.email.value,
			phone: form.phone.value,
			slot: form.slot.value,
		};
		fetch('http://localhost:5000/booking', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(appointmentDetails),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.data._id) {
					toast.success(`${data.message}`);
					setService(null);
					refetch();
				} else {
					toast.error(data.data.message);
				}
			});
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
							defaultValue={date}
							className="input input-bordered w-full bg-accent"
							disabled
						/>
						<input
							name="name"
							type="text"
							defaultValue={user?.displayName}
							className="input input-bordered w-full"
							disabled
						/>
						<input
							name="email"
							type="email"
							defaultValue={user?.email}
							className="input input-bordered w-full"
							disabled
						/>
						<select name="slot" className="select select-bordered w-full">
							{slots.map((slot, ind) => (
								<option value={slot} key={ind}>
									{slot}
								</option>
							))}
						</select>

						<input
							name="phone"
							type="number"
							placeholder="Phone Number"
							className="input input-bordered w-full"
							required
						/>

						<input type="submit" value={'submit'} className="btn btn-accent uppercase" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
