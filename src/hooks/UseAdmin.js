import {useEffect, useState} from 'react';

const UseAdmin = (email) => {
	const [admin, setAdmin] = useState(false);
	const [adminLoading, setAdminLoading] = useState(true);
	useEffect(() => {
		if (email) {
			async function fetchAdmin() {
				try {
					const res = await fetch(`https://medicational-server.vercel.app/users/admin/${email}`);
					const data = await res.json();
					setAdmin(data.Admin);
					setAdminLoading(false);
				} catch (error) {
					console.log(error, 'C');
				}
			}
			fetchAdmin();
		}
	}, [email]);
	return [admin, adminLoading];
};

export default UseAdmin;
