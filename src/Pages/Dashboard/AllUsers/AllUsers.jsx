import React from 'react';
import {useQuery} from 'react-query';
import Loader from '../../Shared/Loader/Loader';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const AllUsers = () => {
	const navigate = useNavigate();
	// !!get all user to database
	const userApi = `http://localhost:5000/users`;
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
			if (res.status === 403) {
				navigate('/login');
			}
			const data = res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}

	// !make Admin
	const makeAdmin = (id) => {
		const adminAPI = `http://localhost:5000/users/admin/${id}`;
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
										<button className="btn btn-sm bg-red-500 hover:bg-red-700 text-white ">
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllUsers;
