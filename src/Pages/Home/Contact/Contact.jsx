import React from 'react';
import contactBg from '../../../assets/images/appointment.png';
const Contact = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${contactBg})`,
			}}
			className="mb-20 py-16 text-center"
		>
			<div className="contact-head">
				<h3 className="text-secondary font-bold mb-2">Contact Us </h3>
				<h2 className="text-white font-normal text-4xl mb-14">Stay connected with us</h2>
			</div>
			<div className="contact-form w-[450px] m-auto">
				<div className="mb-5">
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered input-secondary w-full max-w-xs"
					/>
				</div>
				<div className="mb-5">
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered input-secondary w-full max-w-xs"
					/>
				</div>
				<div className="mb-5">
					<textarea
						className="textarea textarea-primary w-full max-w-xs h-36"
						placeholder="Bio"
					></textarea>
				</div>

				<button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Contact;
