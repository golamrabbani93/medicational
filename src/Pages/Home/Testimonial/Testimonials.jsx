import React from 'react';
import client1 from '../../../assets/images/people1.png';
const Testimonials = () => {
	return (
		<div className="mb-[150px]">
			<div className="ms-12 font-bold mb-12">
				<h3 className="text-secondary">Testimonial</h3>
				<h2 className="text-accent text-4xl font-normal">What Our Patients Says</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ps-20 justify-center items-center justify-items-center ">
				{[1, 2, 3].map((testimonial) => (
					<div
						className="me-12 w-96 
					"
					>
						<p className="mb-10">
							It is a long established fact that by the readable content of a lot layout. The point
							of using Lorem a more-or-less normal distribu to using Content here, content
						</p>
						<div className="flex ">
							<div className="clent-img">
								<img
									className="mt-auto w-16 me-3 border border-secondary p-1 rounded-full"
									src={client1}
									alt="clent-img"
								/>
							</div>
							<div className="client-data mt-auto">
								<h2>Winson Herry</h2>
								<h3>California</h3>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
