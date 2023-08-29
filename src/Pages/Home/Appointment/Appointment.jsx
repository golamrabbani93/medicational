import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
const Appointment = () => {
	return (
		<div className="mt-16 md:mt-[200px]">
			<div
				className="relative"
				style={{
					backgroundImage: `url(${appointment})`,
				}}
			>
				<div className="card grid grid-cols-1 lg:grid-cols-2 lg:mx-44 lg:mb-28">
					<figure>
						<img
							className="hidden lg:block rounded-xl absolute -top-[88px]"
							src={doctor}
							alt="doctor"
						/>
					</figure>
					<div className="ml-7  mt-24 mb-28 w-4/5">
						<h3 className="text-secondary font-bold mb-5">Appointment</h3>
						<h2 className="card-title  text-white text-4xl font-semibold mb-5">
							Make an appointment Today
						</h2>
						<p className="mb-5 text-white text-justify">
							It is a long established fact that a reader will be distracted by the readable content
							of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
							more-or-less normal distribution of letters,as opposed to using 'Content here, content
							here', making it look like readable English. Many desktop publishing packages and web
							page
						</p>

						<button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Appointment;
