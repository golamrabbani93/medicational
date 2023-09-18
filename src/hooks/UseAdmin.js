import {useEffect, useState} from 'react';

const UseAdmin = (email) => {
	const [admin, setAdmin] = useState('');
	const [adminLoading, setAdminLoading] = useState(true);
	useEffect(() => {
		if (email) {
			fetch(`http://localhost:5000/users/admin/${email}`)
				.then((res) => res.json())
				.then((data) => {
					setAdmin(data.Admin);
					setAdminLoading(false);
				});
		}
	}, [email]);
	return [admin, adminLoading];
};

export default UseAdmin;
