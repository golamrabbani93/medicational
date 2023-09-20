import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import gallery from '../../../assets/icons/gallery 1.svg';
import './AddDoctor.css';
import {useQuery} from 'react-query';
import Loader from '../../Shared/Loader/Loader';
import toast from 'react-hot-toast';

const AddDoctor = () => {
	//! image upload text function
	const [fileName, setFileName] = useState('Upload Your Photo');
	const imgLoad = (e) => {
		const files = e.target.files[0].name;
		setFileName(files);
	};
	const ImgBBApi = process.env.REACT_APP_ImgBBApi;
	// !get Doctor Form Data
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();
	const handleLogin = (data) => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append('image', image);
		// !img Upload Url
		fetch(`https://api.imgbb.com/1/upload?key=${ImgBBApi}`, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					const doctorData = {
						name: data.name,
						email: data.email,
						speciality: data.speciality,
						image: result.data.url,
					};
					// ! Doctor Data post Url
					fetch('http://localhost:5000/doctor', {
						method: 'POST',
						headers: {
							authorization: `bearer ${localStorage.getItem('Token')}`,
							'content-type': 'application/json',
						},
						body: JSON.stringify(doctorData),
					})
						.then((res) => res.json())
						.then((data) => {
							toast.success('Doctor Data Insterted');
							setFileName('Upload Your Photo');
							reset();
						});
				}
			});
	};
	// !get Doctor specialities
	const {data: specialities = [], isLoading} = useQuery({
		queryKey: ['specialities'],
		queryFn: async () => {
			const res = fetch('http://localhost:5000/doctor/specialities');
			const data = (await res).json();
			return data;
		},
	});
	if (isLoading) {
		return <Loader></Loader>;
	}

	return (
		<div>
			<div>
				<h3 className="text-2xl">Add Doctor</h3>
			</div>
			<div className="card-body w-96">
				<form onSubmit={handleSubmit(handleLogin)}>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							{...register('name', {required: 'Name is required'})}
							type="text"
							placeholder="Name"
							className="input input-bordered"
						/>
						{errors.name && <span className="text-red-600">{errors.name.message}</span>}
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							{...register('email', {required: 'Email is required'})}
							type="text"
							placeholder="email"
							className="input input-bordered"
						/>
						{errors.email && <span className="text-red-600">{errors.email.message}</span>}
					</div>
					<label className="label">
						<span className="label-text">Speciality</span>
					</label>
					<select
						{...register('speciality', {required: 'speciality is required'})}
						className="select select-bordered w-full"
					>
						{specialities?.data.map((speciality) => (
							<option value={speciality.name} key={speciality._id}>
								{speciality.name}
							</option>
						))}
					</select>

					<div className="form-control mt-2">
						<div className="dropzone">
							<h2 className="text-center mt-6 text-[#9E9C9C]">{fileName}</h2>

							<img className="m-auto mt-3" alt="" src={gallery} />
							<input
								{...register('image', {
									required: 'Image is required',
								})}
								onChange={(e) => imgLoad(e)}
								type="file"
								placeholder="image"
								className="upload-input"
							/>
						</div>
					</div>
					{errors.image && <span className="text-red-600">{errors.image.message}</span>}
					<div className="form-control mt-6">
						<button className="btn btn-accent">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddDoctor;
