import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../Contexts/AuthProvider';
import {toast} from 'react-hot-toast';

const SignUp = () => {
	// !get sign up from auth provider
	const {userSignUp} = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();
	const handleSignUp = (data) => {
		userSignUp(data.email, data.password)
			.then((result) => {
				console.log('🚀🚀: handleSignUp -> result', result);
				reset();
				toast.success('Sign Up Complete');
			})
			.catch((err) => {
				// const message = err.message;
				// const newMessage = message.split('/')[1];
				// const removeLast3 = newMessage.substring(0, newMessage.length - 2);
				toast.error('Sign Up Faild');
			});
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
									{...register('name', {required: 'Name is required'})}
									type="text"
									placeholder="name"
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
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									{...register('password', {
										required: 'Password is required',
										minLength: {value: 6, message: 'Password must be 6 characters long'},
										pattern: {
											value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
											message: 'Password must have uppercase, number and special characters',
										},
									})}
									type="password"
									placeholder="password"
									className="input input-bordered"
								/>
								{errors.password && <span className="text-red-600">{errors.password.message}</span>}
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-accent">Sign Up</button>
							</div>
						</form>
						<div className="">
							<h3 className="text-xs text-center">
								Already in Medicational?{' '}
								<Link to="/login" className="text-secondary">
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
