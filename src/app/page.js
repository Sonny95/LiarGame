import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 h-3/4 bg-gray-300 ">
        {/* top */}
        <div className="text-2xl w-full h-1/6 bg-gray-400 flex items-center justify-center">
          <div>Your Title is</div>
          <div className="ml-2 font-bold">Title</div>
          <button className="ml-4 w-28 h-8 bg-gray-500 rounded-xl text-base">Change Title</button>
        </div>

        {/* set up */}

        <div className="w-1/3 h-3/4 bg-gray-300 ">
          {/* players */}
          <div className="w-full h-1/4 bg-gray-400 ">
            <div>players</div>
            <button className="w-8 h-8 bg-yellow-300 rounded-full "> - </button>
            <div className="w-8 h-8 bg-white"></div>
            <button className="w-8 h-8 bg-yellow-300 rounded-full "> + </button>
          </div>
          {/* choose liar */}
          <div className="w-full h-1/4 bg-gray-400 ">
            <div>Liars</div>
            <button className="w-8 h-8 bg-yellow-300 rounded-full "> - </button>
            <div className="w-8 h-8 bg-white"></div>
            <button className="w-8 h-8 bg-yellow-300 rounded-full "> + </button>
          </div>
        </div>
      </div>
    </div>
  );
}
