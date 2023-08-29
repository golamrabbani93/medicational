import React from 'react';
import contactBg from '../../../assets/images/appointment.png';
const Contact = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${contactBg})`,
			}}
			className=" py-16 text-center"
		>
			<div className="contact-head">
				<h3 className="text-secondary font-bold mb-2">Contact Us </h3>
				<h2 className="text-white font-normal text-4xl mb-14">Stay connected with us</h2>
			</div>
			<div className="contact-form w-96 md:w-[450px] m-auto">
				<div className="mb-5">
					<input
						type="text"
						placeholder="Email"
						className="input input-bordered input-secondary w-full "
					/>
				</div>
				<div className="mb-5">
					<input
						type="text"
						placeholder="Subject"
						className="input input-bordered input-secondary w-full "
					/>
				</div>
				<div className="mb-5">
					<textarea
						className="textarea textarea-primary w-full  h-36"
						placeholder="Your Message"
					></textarea>
				</div>

				<button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
					Submit
				</button>
			</div>
		</div>
	);
};

export default Contact;
