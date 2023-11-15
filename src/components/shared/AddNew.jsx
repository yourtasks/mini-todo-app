import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";

const AddNew = () => {
  return (
    <div className="z-20 fixed bottom-[20%] right-[10%]">
      <Link href={`/new`}>
        <div className="p-4 rounded-full bg-blue-500">
          <MdOutlineAdd size={30} />
        </div>
      </Link>
    </div>
  );
};

export default AddNew;
