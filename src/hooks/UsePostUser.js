const UsePostUser = (name, email) => {
	const user = {
		name: name,
		email: email,
	};
	fetch('http://localhost:5000/user', {
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
