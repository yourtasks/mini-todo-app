const Backdrop = ({ onClose }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      className="fixed top-0 left-0 w-full h-full invert-bg opacity-30 z-20"
    ></div>
  );
};

export default Backdrop;
