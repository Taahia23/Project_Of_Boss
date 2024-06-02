"use client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import Image from "next/image";

const names = ["Aam", "Jaam", "Kola", "Bola"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  return (
    <div className="bg-white h-screen text-black">
      <div className="flex gap-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-[18px] py-3 border border-[#a855f7] flex justify-between items-center gap-[14px]"
          >
            <span className="text-[#a855f7]"> Choose One </span>
            {isOpen ? (
              <IoIosArrowUp className="text-[#a855f7]" />
            ) : (
              <IoIosArrowDown className="text-[#a855f7]" />
            )}
          </button>
          {isOpen && (
            <div className="w-40 h-auto border mt-2">
              {names &&
                names?.length > 0 &&
                names?.map((name, idx) => (
                  <button
                    onClick={() => setSelectedName(name)}
                    key={idx}
                    className={`py-3 px-[18px] flex items-center justify-between w-full ${
                      name === selectedName && "bg-[#f3e8f5] text-[#a855f7]"
                    }`}
                  >
                    {name}
                    {name === selectedName && (
                      <MdCheck className="text-[#a855f7]" />
                    )}
                  </button>
                ))}
            </div>
          )}
        </div>
        <div className="w-[255px] h-[219px] border border-dotted border-gray-400">
          <div className="flex justify-between items-center py-3 px-[18px]">
            <h1 className="font-medium text-sm ">Top Developer</h1>
            <Image
              src={"/svg/github.svg"}
              alt="github icon"
              height={720}
              width={720}
              className="w-[20px] h-[20px]"
            />
          </div>
          {
            selectedName && <div className="py-3 px-[18px] flex items-center justify-between w-full bg-[#fef2f2] text-[#ef4444]">
            <button className="">{selectedName}</button>
            <Image
              src={"/svg/cancel.svg"}
              alt="github icon"
              height={720}
              width={720}
              className="w-[20px] h-[20px]"
            />
          </div>
          }
          
        </div>
      </div>
    </div>
  );
}
