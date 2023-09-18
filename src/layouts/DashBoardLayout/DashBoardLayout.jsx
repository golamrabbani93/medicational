import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import {NavLink, Outlet} from 'react-router-dom';

const DashBoardLayout = () => {
	const dashboardLink = (
		<>
			<li>
				<NavLink to={'/dashboard'} end>
					Dashboard
				</NavLink>
			</li>
			<li className="mt-2">
				<NavLink to={'/dashboard/myappointments'} end>
					My Appointment
				</NavLink>
			</li>
			<li className="mt-2">
				<NavLink to={'/dashboard/allusers'} end>
					All Users
				</NavLink>
			</li>
		</>
	);
	return (
		<div>
			<Navbar></Navbar>
			<div className="drawer lg:drawer-open lg:w-[1440px] m-auto">
				<input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</label>
					<div className="ml-14 mt-12">
						<Outlet></Outlet>
					</div>
				</div>
				<div className="drawer-side rounded">
					<label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
					<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
						{/* Sidebar content here */}
						{dashboardLink}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashBoardLayout;
