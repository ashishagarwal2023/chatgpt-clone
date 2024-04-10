"use client";

import Image from "next/image";
import { useState } from "react";

// NavBar
import { NavBar } from "./NavBar.jsx";

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      isUser: true,
      response: "What is Google?",
    },
    {
      isUser: false,
      response:
        "Google is a multinational technology company primarily known for its internet-related services and products. It was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. The company's mission is to organize the world's information and make it universally accessible and useful.",
    },
    {
      isUser: true,
      response: "Hello, what is this?",
    },
    {
      isUser: false,
      response: "ChatGPT UI Clone in Next.js!",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [generating, setGenerating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "" && !generating) {
      const updatedMessages = [
        ...messages,
        { isUser: true, response: newMessage },
      ];
      setMessages(updatedMessages);
      setNewMessage("");
      setGenerating(true);
      setTimeout(() => setGenerating(false), 1000);
    }
  };

  const handleClear = () => {
    setMessages([]);
  };

  const handleClose = () => {
    alert("What will you do?\n\nPro tip: change this icon to a bars icon and add conversations!");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <NavBar handleClear={handleClear} handleClose={handleClose} />

      <main className="p-2 px-4">
        {messages.length === 0 ? (
            <div className="mt-16 p b-32">
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
          <p className="mt-2 text-center text-base">Built by Ashish Agarwal, based on FreeGPT.js with Next.js</p>
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
                <p className="text-[#0d0d0d]">{msg.response}</p>
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
