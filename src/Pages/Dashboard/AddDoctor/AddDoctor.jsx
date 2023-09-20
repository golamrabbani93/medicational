import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import gallery from '../../../assets/icons/gallery 1.svg';
import './AddDoctor.css';

const AddDoctor = () => {
	const [fileName, setFileName] = useState('Upload Your Photo');
	const imgLoad = (e) => {
		const files = e.target.files[0].name;
		setFileName(files);
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();
	const handleLogin = (data) => {
		console.log(data);
		setFileName('Upload Your Photo');
		reset();
	};
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
						{errors.image && <span className="text-red-600">{errors.image.message}</span>}
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-accent">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddDoctor;
