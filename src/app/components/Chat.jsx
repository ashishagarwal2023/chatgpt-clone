"use client";

// Images
import user from "/public/img/user.png";
import gpt from "/public/img/gpt.svg";

import Image from "next/image";
import { useState } from "react";

// HTML/Markdown Rendering
import { remark } from "remark";
import html from "remark-html";

// NavBar
import { NavBar } from "./NavBar.jsx";

export const Chat = () => {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");
  const [generating, setGenerating] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "" && !generating) {
      const updatedMessages = [
        ...messages,
        { isUser: true, response: newMessage },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
      setGenerating(true);
      let gptRes = await window.gpt.ask(newMessage);
      const htmlRen = (await remark().use(html).process(gptRes)).value;
      setMessages([...updatedMessages, { isUser: false, response: htmlRen }]);
      setGenerating(false);
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <NavBar handleClear={handleClear} />

      <main className="p-2 px-4 dark:text-[#ececec] dark:bg-[#212121]">
        {messages.length === 0 ? (
          <div className="no-scrollbar mt-16 pb-12 overflow-hidden ">
            <div className="flex flex-row justify-center">
              <Image
                src={gpt}
                alt="ChatGPT"
                width={50}
                className="rounded-full p-1 text-[#0d0d0d] bg-black border shadow-sm shadow-white inline-flex invert"
                height={50}
              />
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-center">
              How can I help you today?
            </h2>
            <p className="mt-2 text-center text-base">
              Built by Ashish Agarwal, based on FreeGPT.js with Next.js.
            </p>
            <p className="mt-2 text-center text-base">
              FreeGPT also depends on ChatGPT 3.5 Turbo. FreeGPT or this project
              is not affilated with ChatGPT.
            </p>
            <p className="mt-0 text-center text-base">
              Visit GitHub (top left) for more info.
            </p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="mt-4">
              {msg.isUser ? (
                <Image
                  src={user}
                  alt="User"
                  width={25}
                  height={25}
                  className="inline-flex"
                />
              ) : (
                <Image
                  src={gpt}
                  alt="ChatGPT"
                  width={25}
                  className="rounded-full p-1 text-white bg-[#19c37d] inline-flex"
                  height={25}
                />
              )}
              <div className="px-2 font-semibold inline-flex text-[#0d0d0d] dark:text-gray-200">
                {msg.isUser ? "You" : "ChatGPT"}
              </div>
              <div className="flex px-[34px]">
                {msg.isUser ? (
                  <p className="max-w-xl md:max-w-full text-[#0d0d0d] dark:text-gray-100">
                    {msg.response}
                  </p>
                ) : (
                  <div
                    className="max-w-xl md:max-w-full text-[#0d0d0d] markdown dark:text-gray-100"
                    dangerouslySetInnerHTML={{ __html: msg.response }}
                  ></div>
                )}
              </div>
            </div>
          ))
        )}
        <div className="mt-28 bottom-0 sticky w-full bg-transparent p-0 m-0">
          <div className="px-0 py-2 items-center text-center text-[#676767] bg-white text-xs dark:bg-[#212121] dark:text-[#b4b4b4]">
            <form onSubmit={handleSubmit}>
              <textarea
                rows="1"
                className="bg-white border-[#9b9b9b] border text-base w-full focus:outline-none p-4 rounded-lg dark:bg-[#212121] dark:border-[#9b9b9b]"
                placeholder="Message GPT, enter to send"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              ></textarea>
            </form>
            <p className="mt-2">
              ChatGPT can make mistakes. Consider checking important
              information.
            </p>
            <p>
              Enter or click to{" "}
              <span
                className="text-blue-700 cursor-pointer text-sm dark:text-blue-400"
                onClick={handleSubmit}
              >
                Send Message
              </span>
              !
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
