import {useEffect, useState} from 'react';

const UseAdmin = (email) => {
	const [admin, setAdmin] = useState(false);
	const [mainAdmin, setMainAdmin] = useState(false);
	const [adminLoading, setAdminLoading] = useState(true);
	useEffect(() => {
		if (email) {
			async function fetchAdmin() {
				try {
					const res = await fetch(`http://localhost:5000/users/admin/${email}`);
					const data = await res.json();
					setAdmin(data.admin);
					setMainAdmin(data.main);
					setAdminLoading(false);
				} catch (error) {
					console.log(error, 'C');
				}
			}
			fetchAdmin();
		}
	}, [email]);
	// !Return Admin Data
	const data = {
		admin,
		mainAdmin,
		adminLoading,
	};
	return data;
};

export default UseAdmin;
