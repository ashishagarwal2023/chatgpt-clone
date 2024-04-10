import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const NavBar = ({handleClose, handleClear}) => {
  return (
   <header className="m-0 p-2 border-b border-b-[#00000026] bg-white flex justify-between">
      <div className="left p-1 hover:bg-gray-100 cursor-pointer" onClick={handleClose}>
        <FontAwesomeIcon icon={faClose} className="w-5 text-[#0d0d0d]" />
      </div>
      <div className="center p-1">
        <h3 className="text-md">
          <span className="font-semibold">ChatGPT</span> 3.5
        </h3>
      </div>
      <div className="right p-1 hover:bg-gray-100 cursor-pointer" onClick={handleClear}>
        <FontAwesomeIcon icon={faPenToSquare} className="w-5 text-[#0d0d0d]" />
      </div>
    </header>
  );
};