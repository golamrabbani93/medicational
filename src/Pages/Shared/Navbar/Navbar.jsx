import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
	const navlink = (
		<>
			<li>
				<NavLink to={'/'} end>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to={'/about'}>About</NavLink>
			</li>
			<li>
				<NavLink to={'/appointment'}>Appointment</NavLink>
			</li>
			<li>
				<NavLink to={'/login'}>Login</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar bg-base-100 flex justify-between m-auto lg:w-[1440px]">
			<div className="navbar-start flex flex-row-reverse justify-end">
				<div className="dropdown ">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{navlink}
					</ul>
				</div>
				<Link className="btn btn-ghost normal-case text-xl">Medicational</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{navlink}</ul>
			</div>
		</div>
	);
};

export default Navbar;
