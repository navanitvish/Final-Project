import { useState } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDwcrIqs7AVdT5u997wCKkm_MjJ5iPPIfg");
const gen_model = genAI.getGenerativeModel({ model: "gemini-pro" });

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const chat = gen_model.startChat({
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const res = await chat.sendMessage(message);
    const text = await res.response.text();

    setChatHistory((prev) => [
      ...prev,
      { role: "user", content: message },
      { role: "model", content: text },
    ]);
    setMessage("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen  bg-white text-white rounded-lg">
      <header className="px-4 py-2  bg-green-500">
        <h1 className="text-2xl font-bold text-black">
          HealthExplorer AI Chatbot
        </h1>
      </header>
      <main className="flex-grow overflow-y-auto p-4">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`my-2 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`rounded-lg p-2 ${
                message.role === "user" ? "bg-blue-300" : "bg-green-300"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </main>
      <footer className="px-4 py-4 bg-green-500">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2  text-black border border-gray-300 rounded px-4 py-4 focus:border-blue-500"
            placeholder="Write something..."
          />
          <button
            type="submit"
            className="ml-2 m-4 py-4 px-8 rounded-lg bg-green-400 text-white hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </footer>
    </div>
  );
}

export default Chatbot;
