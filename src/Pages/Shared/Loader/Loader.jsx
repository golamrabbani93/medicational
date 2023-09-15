import React from 'react';
import {ScaleLoader} from 'react-spinners';

const Loader = () => {
	return (
		<div>
			<div className="flex justify-center items-center h-96">
				<ScaleLoader color="#19D3AE"></ScaleLoader>
			</div>
		</div>
	);
};

export default Loader;
