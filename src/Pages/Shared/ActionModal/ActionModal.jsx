import React from 'react';

const ActionModal = ({deletedItem, cancelDelete, deleteSuccess}) => {
	return (
		<div>
			{/* Put this part before </body> tag */}
			<input type="checkbox" id="action-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Are You Sure To Delete <span className="text-red-500">{deletedItem?.name} </span>
						Information ?
					</h3>
					<p className="py-4">This Action Complete to Remove all Information from the Database</p>
					<div className="modal-action">
						<label
							// !if user press Yes Button
							onClick={() => deleteSuccess(deletedItem._id)}
							htmlFor="action-modal"
							className="btn btn-sm bg-red-500 hover:bg-red-700 text-white "
						>
							Yay!
						</label>
						<label
							// !if user press No Button
							onClick={() => cancelDelete({})}
							htmlFor="action-modal"
							className="btn btn-sm btn-primary  text-white"
						>
							No
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActionModal;
