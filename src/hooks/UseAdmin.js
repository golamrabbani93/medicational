import {useEffect, useState} from 'react';

const UseAdmin = (email) => {
	const [admin, setAdmin] = useState('');
	useEffect(() => {
		if (email) {
			fetch(`http://localhost:5000/users/admin/${email}`)
				.then((res) => res.json())
				.then((data) => {
					setAdmin(data.Admin);
				});
		}
	}, [email]);
	return [admin];
};

export default UseAdmin;
