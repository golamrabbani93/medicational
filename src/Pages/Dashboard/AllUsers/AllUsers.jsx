import React, {useContext, useState} from 'react';
import {useQuery} from 'react-query';
import Loader from '../../Shared/Loader/Loader';
import {Navigate, useLocation} from 'react-router-dom';
import toast from 'react-hot-toast';
import {AuthContext} from '../../../Contexts/AuthProvider';
import ActionModal from '../../Shared/ActionModal/ActionModal';

const AllUsers = () => {
	// !get user and logout function
	const {user, logOut} = useContext(AuthContext);
	const email = user?.email;
	// !set User for delete
	const [selectedUser, setSelectedUser] = useState({});
	const location = useLocation();
	// !!get all user to database
	const userApi = `https://medicational-server.vercel.app/users`;
	const {
		data: users = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await fetch(userApi, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('Token')}`,
				},
			});
			//! Token Expired
			if (res.status === 403) {
				toast.error('Token Expired');
				logOut();
				<Navigate to="/login" state={{from: location}} replace />;
			}
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}

	// !make Admin
	const makeAdmin = (id) => {
		const adminAPI = `https://medicational-server.vercel.app/users/admin/${id}`;
		fetch(adminAPI, {
			method: 'PUT',
			headers: {
				authorization: `Bearer ${localStorage.getItem('Token')}`,
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message === 'Make Admin Faild') {
					toast.error(data.message);
				} else {
					toast.success(data.message);
				}
				refetch();
			});
	};
	// !Delete User
	const deleteUser = async (id) => {
		const deleteURL = `https://medicational-server.vercel.app/users/${id}`;

		try {
			const res = await fetch(deleteURL, {
				method: 'DELETE',
				headers: {
					authorization: `Bearer ${localStorage.getItem('Token')}`,
				},
			});
			const data = await res.json();
			if (data.message) {
				toast.success(data.message);
				refetch();
			}
		} catch (error) {
			toast.error('Delete Faild');
		}
	};
	return (
		<div>
			<div>
				<h3 className="text-2xl mb-6">My Appointment</h3>
			</div>
			<div>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead className="bg-base-300 text-center">
							<tr>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Admin</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{users.data.map((user, ind) => (
								<tr key={user._id}>
									<th>{ind + 1}</th>
									<td>{user?.name}</td>
									<td>{user?.email}</td>
									<td>
										<button
											disabled={user.role === 'Admin'}
											onClick={() => makeAdmin(user._id)}
											className="btn btn-sm btn-secondary"
										>
											Make Admin
										</button>
									</td>
									<td>
										<label
											disabled={user?.admin === 'Main' || user?.email === email}
											htmlFor="action-modal"
											onClick={() => setSelectedUser(user)}
											className="btn btn-sm bg-red-500 hover:bg-red-700 text-white"
										>
											Delete
										</label>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<ActionModal
					deletedItem={selectedUser}
					cancelDelete={setSelectedUser}
					deleteSuccess={deleteUser}
				></ActionModal>
			</div>
		</div>
	);
};

export default AllUsers;
