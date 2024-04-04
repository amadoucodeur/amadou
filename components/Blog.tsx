import React from "react";
import { LuExternalLink } from "react-icons/lu";

export default function Blog() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Blog</h1>
      <div className="flex">
        <div className="bg-[#06152c86] items-start gap-2 p-4 w-[1000px] rounded-md border-[1px] border-gray-500 hover:border-gray-400 flex justify-between transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-2 ">
            <h3 className="font-bold">Title</h3>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              itaque soluta provident? Est sequi laboriosam accusantium quidem
              cum libero eaque ratione incidunt ipsam, iste aliquid possimus
              sunt quod quo placeat.
            </p>
            <p className="text-[10px] font-bold text-gray-300">date</p>
          </div>
          <button><LuExternalLink size={20} /></button>
        </div>
      </div>
    </div>
  );
}
