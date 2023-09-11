import React from 'react';

const BookingModal = () => {
	return (
		<div>
			{/* You can open the modal using document.getElementById('ID').showModal() method */}

			<dialog id="bookingModal" className="modal">
				<div className="modal-box">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</button>
					</form>
					<h3 className="font-bold text-lg">Hello!</h3>
					<p className="py-4">Press ESC key or click on ✕ button to close</p>
				</div>
			</dialog>
		</div>
	);
};

export default BookingModal;
