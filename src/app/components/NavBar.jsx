import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const NavBar = ({handleClear}) => {
  return (
    <header className="m-0 p-2 border-b border-b-[#00000026] dark:border-b-[#ffffff26] bg-white flex justify-between dark:bg-[#212121]">
      <a
        href="https://github.com/ashishagarwal2023/chatgpt-clone"
        target="_blank"
      >
        <div className="left p-1 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700 transition duration-100 rounded-full">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 text-[#0d0d0d] dark:text-white"
          />
        </div>
      </a>
      <div className="center p-1">
        <h3 className="text-md dark:text-gray-100">
          <span className="font-semibold dark:text-white">FreeGPT</span> 3.5
        </h3>
      </div>
      <div
        className="right p-1 hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700 transition duration-100 rounded-full"
        onClick={handleClear}
      >
        <FontAwesomeIcon icon={faPenToSquare} className="w-5 text-[#0d0d0d] dark:text-white" />
      </div>
    </header>
  );
};