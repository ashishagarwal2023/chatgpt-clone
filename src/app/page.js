// import { NavBar } from "./components/NavBar";
import { Chat } from "./components/Chat";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <Image
          src="img/gpt.svg"
          alt="Hm"
          width={200}
          height={200}
          className="rounded-full p-1 text-white w-8 bg-[#19c37d]"
        /> */}
      <Chat />
    </>
  );
}
