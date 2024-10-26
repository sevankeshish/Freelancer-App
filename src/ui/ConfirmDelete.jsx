function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-base text-left mb-8">
        Are you sure you want to delete {resourceName}?
      </h2>
      <div className="flex justfy-between items-center gap-x-16 ">
        <button
          className="btn btn--danger flex-1 py-3"
          onClick={onConfirm}
          disabled={disabled}
        >
          Confirm
        </button>
        <button
          className="btn btn--primary flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
