const Option = ({ title, Icon, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 w-full text-start click">
      <div>{Icon}</div>
      <p>{title}</p>
    </button>
  );
};

export default Option;
