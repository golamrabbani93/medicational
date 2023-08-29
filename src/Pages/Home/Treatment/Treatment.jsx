import React from 'react';
import treatment from '../../../assets/images/treatment.png';
const Treatment = () => {
	return (
		<div className="card grid grid-cols-1 lg:grid-cols-2 lg:mx-44 lg:mb-28">
			<figure>
				<img className="w-[450px] rounded-xl" src={treatment} alt="treatment" />
			</figure>
			<div className="mt-32 w-4/5">
				<h2 className="card-title text-5xl font-bold mb-6">
					Exceptional Dental Care, on Your Terms
				</h2>
				<p className="mb-6 text-justify">
					It is a long established fact that a reader will be distracted by the readable content of
					a page when looking at its layout. The point of using Lorem Ipsumis that it has a
					more-or-less normal distribution of letters,as opposed to using 'Content here, content
					here', making it look like readable English. Many desktop publishing packages and web page
				</p>

				<button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Treatment;
