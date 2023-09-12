import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../Contexts/AuthProvider';
import {toast} from 'react-hot-toast';

const Login = () => {
	// !get sign up from auth provider
	const {userSignIn} = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: {errors},
	} = useForm();
	const handleLogin = (data) => {
		console.log('🚀🚀: handleLogin -> data', data);
		userSignIn(data.email, data.password)
			.then((result) => {
				console.log('🚀🚀: handleSignUp -> result', result);
				reset();
				toast.success('Login Complete');
			})
			.catch((err) => {
				toast.error('Login Faild');
			});
	};

	return (
		<div>
			<div className="hero min-h-screen">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<h3 className="text-xl text-center mt-6">Login</h3>
					<div className="card-body">
						<form onSubmit={handleSubmit(handleLogin)}>
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
									})}
									type="password"
									placeholder="password"
									className="input input-bordered"
								/>
								{errors.password && <span className="text-red-600">{errors.password.message}</span>}
								<label className="label">
									<Link href="#" className="label-text-alt link link-hover">
										Forgot password?
									</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-accent">Login</button>
							</div>
						</form>
						<div className="">
							<h3 className="text-xs text-center">
								New to Medicational?{' '}
								<Link to="/signup" className="text-secondary">
									Create new account
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

export default Login;
