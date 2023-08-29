import React from 'react';
import footerBg from '../../../assets/images/footer.png';
import {Link} from 'react-router-dom';
const Footer = () => {
	return (
		<footer
			className=""
			style={{
				backgroundImage: `url(${footerBg})`,
				backgroundPosition: 'center',
			}}
		>
			<div className="footer py-20 justify-items-center">
				<div>
					<span className="footer-title">Services</span>
					<Link className="link link-hover text-accent">Emergency Checkup</Link>
					<Link className="link link-hover text-accent">Monthly Checkup</Link>
					<Link className="link link-hover text-accent">Weekly Checkup</Link>
					<Link className="link link-hover text-accent">Deep Checkup</Link>
				</div>
				<div>
					<span className="footer-title">ORAL HEALTH</span>
					<Link className="link link-hover text-accent">Fluoride Treatment</Link>
					<Link className="link link-hover text-accent">Cavity Filling</Link>
					<Link className="link link-hover text-accent">Teath Whitening</Link>
				</div>
				<div>
					<span className="footer-title">OUR ADDRESS</span>
					<Link className="link link-hover text-accent">New York - 101010 Hudson</Link>
				</div>
			</div>
			<div className="copy text-center py-10">
				<p>{`Copyright © ${new Date().getFullYear()}- All right reserved by Medication`}</p>
			</div>
		</footer>
	);
};

export default Footer;
