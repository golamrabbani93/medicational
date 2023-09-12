import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa';
import {AuthContext} from '../../../Contexts/AuthProvider';
const Navbar = () => {
	const {user} = useContext(AuthContext);
	console.log('🚀🚀: Navbar -> user', user);
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
			<div className=" flex flex-row-reverse justify-end">
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
			{/* user avater section */}
			<div className="dropdown dropdown-end">
				<label tabIndex={0} className="btn btn-outline btn-circle avatar onlin">
					<div className="w-10 rounded-full">
						{/* <img alt="" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
						<div className="flex justify-center items-center h-full">
							<FaUserAlt className=""></FaUserAlt>
						</div>
					</div>
				</label>
				<ul
					tabIndex={0}
					className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
				>
					<li>
						<Link className="justify-between ">Profile</Link>
					</li>
					<li>
						<button className="justify-between">Log Out {user}</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
