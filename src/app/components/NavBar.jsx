import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const NavBar = ({handleClear}) => {
  return (
    <header className="m-0 p-2 border-b border-b-[#00000026] bg-white flex justify-between">
      <a href="https://github.com/ashishagarwal2023/chatgpt-clone" target="_blank">
        <div className="left p-1 hover:bg-gray-100 cursor-pointer">
          <FontAwesomeIcon icon={faGithub} className="w-5 text-[#0d0d0d]" />
        </div>
      </a>
      <div className="center p-1">
        <h3 className="text-md">
          <span className="font-semibold">FreeGPT</span> 3.5
        </h3>
      </div>
      <div
        className="right p-1 hover:bg-gray-100 cursor-pointer"
        onClick={handleClear}
      >
        <FontAwesomeIcon icon={faPenToSquare} className="w-5 text-[#0d0d0d]" />
      </div>
    </header>
  );
};