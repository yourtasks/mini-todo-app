import Navbar from "@/components/navigation/Navbar";

const layout = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
