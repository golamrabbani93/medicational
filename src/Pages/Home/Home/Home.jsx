import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import Appointment from '../Appointment/Appointment';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<InfoCards></InfoCards>
			<Services></Services>
			<Treatment></Treatment>
			<Appointment></Appointment>
		</div>
	);
};

export default Home;
