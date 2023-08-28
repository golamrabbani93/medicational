import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const InfoCards = () => {
	const infoCardDatas = [
		{
			id: 1,
			title: 'Opening Hours',
			description: 'Lorem Ipsum is simply dummy text of the pri',
			icon: clock,
			background: 'bg-gradient-to-r from-secondary to-primary',
		},
		{
			id: 2,
			title: 'Visit our location',
			description: 'Brooklyn, NY 10036, United States',
			icon: marker,
			background: 'bg-accent',
		},
		{
			id: 3,
			title: 'Contact us now',
			description: '+000 123 456789',
			icon: phone,
			background: 'bg-gradient-to-r from-secondary to-primary',
		},
	];
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-10">
			{infoCardDatas.map((card) => (
				<InfoCard key={card.id} card={card}></InfoCard>
			))}
		</div>
	);
};

export default InfoCards;
