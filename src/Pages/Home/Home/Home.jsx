import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCard/InfoCards';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import Appointment from '../Appointment/Appointment';
import Testimonials from '../Testimonial/Testimonials';
import Contact from '../Contact/Contact';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<InfoCards></InfoCards>
			<Services></Services>
			<Treatment></Treatment>
			<Appointment></Appointment>
			<Testimonials></Testimonials>
			<Contact></Contact>
		</div>
	);
};

export default Home;
