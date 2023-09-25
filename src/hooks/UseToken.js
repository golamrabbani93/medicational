import {useEffect, useState} from 'react';

const UseToken = (email) => {
	const [token, setToken] = useState('');
	useEffect(() => {
		if (email) {
			// !get jwt token
			fetch(`https://medicational-server.vercel.app/jwt?email=${email}`)
				.then((res) => res.json())
				.then((data) => {
					localStorage.setItem('Token', data.token);
					setToken(data.token);
				});
		}
	}, [email]);
	return [token];
};

export default UseToken;
