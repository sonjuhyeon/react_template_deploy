import React from "react";
import { features } from "../../constants/data";

const Features = () => {
  return (
    <div>
      <div className="my-6 lg:my-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center">
          Easily Build{" "}
          <span className="bg-gradient-to-t from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
            Your Code
          </span>
        </h2>
      </div>
      <div className="my-5 lg:my-10 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
      <div className="flex flex-col font-customFontEn">
        {features.map((item, idx) => (
          <div key={idx} className="py-5 lg:py-10 flex flex-col gap-y-8">
            <div className="flex justify-center items-center gap-x-2 text-4xl">
              <div className="text-violet-700 p-2 rounded-full dark:bg-neutral-900 bg-neutral-100">
                {item.icon}
              </div>
              <div>{item.text}</div>
            </div>
            <p className="text-center">{item.description}</p>
            <div className="flex">
              <div className="w-1/2"></div>
              <div className="w-1/2">
                <img src={item.img} alt="" className="w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
