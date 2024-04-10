"use client";

import Image from "next/image";
import { useState } from "react";

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
      setMessages([...updatedMessages, { isUser: false, response: gptRes }]);
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

      <main className="p-2 px-4">
        {messages.length === 0 ? (
            <div className="no-scrollbar mt-16 pb-12 overflow-hidden ">
          <div className="flex flex-row justify-center">
            <Image
              src="/img/gpt.svg"
              alt="ChatGPT"
              width={50}
              className="rounded-full p-1 text-white bg-black border shadow-md shadow-white inline-flex invert"
              height={50}
            />
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-center">How can I help you today?</h2>
          <p className="mt-2 text-center text-base">Built by Ashish Agarwal, based on FreeGPT.js with Next.js.</p>
          <p className="mt-2 text-center text-base">FreeGPT also depends on ChatGPT 3.5 Turbo.</p>
          <p className="mt-0 text-center text-base">Visit GitHub (top left) for more info.</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="mt-4">
              {msg.isUser ? (
                <Image
                  src="/img/user.png"
                  alt="User"
                  width={25}
                  height={25}
                  className="inline-flex"
                />
              ) : (
                <Image
                  src="/img/gpt.svg"
                  alt="ChatGPT"
                  width={25}
                  className="rounded-full p-1 text-white bg-[#19c37d] inline-flex"
                  height={25}
                />
              )}
              <div className="px-2 font-semibold inline-flex text-[#0d0d0d]">
                {msg.isUser ? "You" : "ChatGPT"}
              </div>
              <div className="flex px-[34px]">
                <p className="text-[#0d0d0d] max-w-xl md:max-w-full">{msg.response}</p>
              </div>
            </div>
          ))
        )}
        <div className="mt-28 bottom-0 sticky w-full bg-transparent p-0 m-0">
          <div className="px-0 py-2 items-center text-center text-[#676767] bg-white text-xs">
            <form onSubmit={handleSubmit}>
              <textarea
                rows="1"
                className="bg-white border-[#9b9b9b] border text-base w-full focus:outline-none p-4 rounded-lg"
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
                className="text-blue-700 cursor-pointer text-sm"
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
