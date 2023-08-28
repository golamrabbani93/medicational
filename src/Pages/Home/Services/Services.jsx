import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import SingleService from './SingleService';

const Services = () => {
	const servicesData = [
		{
			id: 1,
			title: 'Fluoride Treatment',
			description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
			img: fluoride,
		},
		{
			id: 2,
			title: 'Fluoride Treatment',
			description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
			img: cavity,
		},
		{
			id: 3,
			title: 'Fluoride Treatment',
			description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
			img: whitening,
		},
	];
	return (
		<div className="lg:my-[150px] mb-10 text-center">
			<div>
				<h3 className="text-secondary font-bold mb-2">OUR SERVICES</h3>
				<h2 className="text-4xl">Services We Provide</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-10">
				{servicesData.map((service) => (
					<SingleService key={service.id} service={service}></SingleService>
				))}
			</div>
		</div>
	);
};

export default Services;
