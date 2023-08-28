import React from 'react';

const InfoCard = ({card}) => {
	const {title, description, icon, background} = card;
	return (
		<div className={`card lg:card-side shadow-xl ${background} p-5 text-white`}>
			<figure>
				<img src={icon} alt="icon" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
