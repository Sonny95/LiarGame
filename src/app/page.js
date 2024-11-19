"use client";

import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="w-1/3 h-3/4 bg-gray-800">
        {/* top */}
        <div className="text-2xl w-full h-1/6 flex items-center justify-center">
          <div>Your Title is</div>

          <div className="ml-2 font-bold">Title</div>

          <Link href={"/title"}>
            <button className="ml-4 w-28 h-8 rounded-xl text-base bg-blue-800 hover:bg-yellow-500">
              Change Title
            </button>
          </Link>
        </div>

        {/* set up */}
        <div className=" w-full h-3/4 flex items-cetner justify-center font-bold text-3xl">
          <div className="w-2/3 h-3/4 flex flex-col items-center justify-center">
            {/* players */}
            <div className="w-full h-1/4 flex items-center justify-between">
              <div className="w-1/2 flex items-center justify-center">
                <div>players</div>
              </div>
              <button className="w-8 h-8 bg-gray-300 rounded-full text-black"> - </button>
              <div className="w-8 h-8 bg-white flex items-center justify-center text-black">3</div>
              <button className="w-8 h-8 bg-gray-300 rounded-full text-black"> + </button>
            </div>
            {/* choose liar */}
            <div className="w-full h-1/4 flex items-center justify-between">
              <div className="w-1/2 flex items-center justify-center">
                <div>Liars</div>
              </div>
              <button className="w-8 h-8 bg-gray-300 rounded-full text-black"> - </button>
              <div className="w-8 h-8 bg-white flex items-center justify-center text-black">1</div>
              <button className="w-8 h-8 bg-gray-300 rounded-full text-black"> + </button>
            </div>{" "}
            {/* start button */}
            <Link href={"/chatBox"}>
              <button className="text-3xl w-28 h-12 bg-blue-800 hover:bg-yellow-500 rounded-xl mt-12">
                {" "}
                PLAY
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
