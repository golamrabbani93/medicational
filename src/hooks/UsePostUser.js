const UsePostUser = (name, email) => {
	const user = {
		name: name,
		email: email,
	};
	fetch('https://medicational-server.vercel.app/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
		});
};

export default UsePostUser;
