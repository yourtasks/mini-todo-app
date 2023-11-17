const IconButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="h-fit w-fit click p-2 rounded-full relative"
    >
      {children}
    </button>
  );
};

export default IconButton;
