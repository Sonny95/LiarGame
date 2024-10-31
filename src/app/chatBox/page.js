import React from "react";

function ChatBox() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-3/4 max-w-md p-4 bg-gray-800 text-white rounded-lg transition-all duration-500 ease-in-out">
        <div className="text-2xl w-full h-1/6 flex items-center justify-center">
          <div>You are a</div>
          <div className="ml-2 font-bold">"Liar"</div>
        </div>
        <div
          className={`overflow-y-scroll scrollbar-thin scrollbar-thumb-white mb-4 border border-gray-600 p-2 rounded-lg flex flex-col h-96`}
        ></div>
        <div className="mb-4"></div>
        <div className="flex space-x-2">
          {/* typing input */}
          <input
            className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-700 text-white"
            type="text"
          />
          <button className="p-2 bg-blue-500 rounded-lg">send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
