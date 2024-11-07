import React from "react";
import Link from "next/link";

const names = [
  "Ryde",
  "Actor",
  "Friends",
  "Fashil Brands",
  "Friends",
  "Jobs",
  "Foods",
  "Jobs",
  "Animals",
];

function Title() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 h-3/4 bg-gray-800">
        <div className="text-3xl w-full h-1/6 flex items-center justify-between">
          <Link href={"/"}>
            <button className="rounded-full h-12 w-12 border-white float-left text-white">
              {" "}
              &lt;
            </button>
          </Link>
          <div className="flex-grow text-center mr-8 ">Title</div>
        </div>
        <div className="w-full flex flex-wrap justify-between">
          {names.map((name, index) => (
            <button
              key={index}
              className="cursor:point mx-2 w-32 h-16 rounded-xl text-base bg-blue-800 mb-4 hover:bg-yellow-500" // mb-2로 아래 여백 추가
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Title;
