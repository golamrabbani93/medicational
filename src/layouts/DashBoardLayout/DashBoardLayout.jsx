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
		</>
	);
	return (
		<div>
			<Navbar></Navbar>
			<div className="drawer lg:drawer-open">
				<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<Outlet></Outlet>
					<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
						Open drawer
					</label>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
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
