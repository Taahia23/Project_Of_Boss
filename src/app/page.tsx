"use client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import Image from "next/image";

const names = ["Aam", "Jaam", "Kola", "Bola"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopDevNames, setSelectedTopDevNames] = useState<string[]>([]);

  const handleAddStrings = (name: string) => {
    setSelectedTopDevNames((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  console.log("setSelectedTopDevNames", selectedTopDevNames);
  return (
    <div className="bg-white h-screen text-black w-full mx-auto pt-20">
      <div className="flex gap-10 justify-center">
        {/* ======= choose one drop down starts ========= */}
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
            <div className="w-40 h-auto border mt-2 bg-[#fafafa]">
              {names &&
                names?.length > 0 &&
                names?.map((name, idx) => (
                  <button
                    onClick={() => handleAddStrings(name)}
                    key={idx}
                    className={`py-3 px-[18px] flex items-center justify-between w-full ${
                      name === name && "bg-[#f3e8f5] text-[#a855f7]"
                    }`}
                  >
                    {name}
                    {selectedTopDevNames?.includes(name) && (
                      <Image
                        src={"/svg/checkSign.svg"}
                        alt="check icon"
                        height={720}
                        width={720}
                        className="w-[20px] h-[20px]"
                      />
                    )}
                  </button>
                ))}
            </div>
          )}
        </div>
        {/* ======= choose one drop down ends ========= */}

        {/* ======= Top developer section starts ========= */}
        <div className="w-[255px] h-auto border border-dotted border-gray-400 bg-[#fafafa]">
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
          {selectedTopDevNames && (
            <ul>
              {selectedTopDevNames &&
                selectedTopDevNames.length > 0 &&
                selectedTopDevNames?.map((dev, idx) => (
                  <div
                    key={idx}
                    className="py-3 px-[18px] flex items-center justify-between w-full bg-[#fef2f2] text-[#ef4444]"
                  >
                    <div className="flex gap-3">
                      <div className="w-[30px] h-[30px] rounded-full bg-[#ef4444] flex items-center justify-center"> <span className="text-white">{dev?.charAt(0)}</span></div>

                      {/* <button className="">{selectedName}</button> */}

                      <li>{dev}</li>
                    </div>

                    <Image
                      src={"/svg/cancel.svg"}
                      alt="cancel icon"
                      height={720}
                      width={720}
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                ))}
            </ul>
          )}
        </div>
        {/* ======= Top developer section ends ========= */}
      </div>
    </div>
  );
}
