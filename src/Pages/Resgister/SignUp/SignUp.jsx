import React from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const handleSignUp = (data) => {
		console.log('🚀🚀: handleSignUp -> data', data);
	};
	return (
		<div>
			<div className="hero min-h-screen">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<h3 className="text-xl text-center mt-6">Sign Up</h3>
					<div className="card-body">
						<form onSubmit={handleSubmit(handleSignUp)}>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									{...register('name', {required: true})}
									type="text"
									placeholder="name"
									className="input input-bordered"
								/>
								{errors.name && <span className="text-red-600">Name is required</span>}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									{...register('email', {required: true})}
									type="text"
									placeholder="email"
									className="input input-bordered"
								/>
								{errors.email && <span className="text-red-600">Email is required</span>}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									{...register('password', {required: true})}
									type="password"
									placeholder="password"
									className="input input-bordered"
								/>
								{errors.password && <span className="text-red-600">Password is required</span>}
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-accent">Sign Up</button>
							</div>
						</form>
						<div className="">
							<h3 className="text-xs text-center">
								Already in Medicational?{' '}
								<Link to="/signup" className="text-secondary">
									Login
								</Link>
							</h3>
							<div className="divider">OR</div>
							<button className="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
