import React, {useContext, useState} from 'react';
import toast from 'react-hot-toast';
import {useQuery} from 'react-query';
import {Navigate, useLocation} from 'react-router-dom';
import {AuthContext} from '../../../Contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import ActionModal from '../../Shared/ActionModal/ActionModal';

const ManageDoctors = () => {
	const {logOut} = useContext(AuthContext);
	const location = useLocation();
	// !Set selected Doctor for delete
	const [selectedDoctor, setSelectedDoctor] = useState({});
	// !Doctor list get from database
	const doctorsURl = 'https://medicational-server.vercel.app/doctor';
	const {
		data: doctors = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['doctors'],
		queryFn: async () => {
			const res = await fetch(doctorsURl, {
				headers: {
					authorization: `Bearer ${localStorage.getItem('Token')}`,
				},
			});
			//! Token Expired
			if (res.status === 403) {
				console.log('object');
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

	// !Delete Doctor
	const deleteDoctor = async (id) => {
		const deleteURL = `https://medicational-server.vercel.app/doctor/${id}`;

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
				<h3 className="text-2xl mb-6">Manage Doctors</h3>
			</div>
			<div>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead className="bg-base-300">
							<tr>
								<th></th>
								<th>Name</th>
								<th>Speciality</th>
								<th>Email</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{doctors.data.length > 0 &&
								doctors.data.map((doctor, ind) => (
									<tr key={doctor._id}>
										<td>{ind + 1}</td>
										<td>
											<div className="flex items-center space-x-3">
												<div className="avatar">
													<div className="mask mask-squircle w-12 h-12">
														<img src={doctor.image} alt="Avatar Tailwind CSS Component" />
													</div>
												</div>
												<div>
													<div className="font-bold">{doctor.name}</div>
												</div>
											</div>
										</td>
										<td>{doctor.speciality}</td>
										<td>{doctor.email}</td>
										<td>
											<label
												htmlFor="action-modal"
												onClick={() => setSelectedDoctor(doctor)}
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
			</div>

			{/* Show modal for delete doctor */}
			<ActionModal
				deletedItem={selectedDoctor}
				cancelDelete={setSelectedDoctor}
				deleteSuccess={deleteDoctor}
			></ActionModal>
		</div>
	);
};

export default ManageDoctors;
