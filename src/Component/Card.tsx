import React from "react";

function Card({
  hoverText,
  btnHover,
  coverContent,
  bgcolorHover = "bg-green-500",
  bgcolorCover = "bg-blue-700",
  tech,
}: {
  hoverText?: string;
  btnHover: string;
  tech?: string;
  coverContent?: JSX.Element;
  bgcolorHover?: string;
  bgcolorCover?: string;
}) {
  return (
    <div
      className="max-w-[420px] shadow-lg h-80 relative rounded-2xl overflow-hidden
"
    >
      <div
        className={`absolute w-full  scale-[3] hover:scale-[1] top-0 duration-200 opacity-0 hover:opacity-100 h-full ${bgcolorHover} text-white justify-center items-center flex`}
      >
        <div className=" w-[200px] h-[200px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] top-[-20%] left-[-20%] rounded-full"></div>
        <div className=" w-[200px] h-[200px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] bottom-[-30%] right-[-10%] rounded-full"></div>
        <div className=" w-[50px] h-[50px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] top-[5%] right-[10%] rounded-full"></div>
        <div className=" w-[130px] h-[130px] HEADER_ANIMATION absolute bg-slate-100 opacity-[0.2] bottom-[5%] left-[5%] rounded-full"></div>
        <div className="text-center p-3 z-10 ">
          <p className=" text-xl font-thin">{hoverText}</p>
          <div className="mt-2 font-bold">
            <p className=" text-md">{tech}</p>
          </div>
          <button className="btn mt-3">{btnHover}</button>
        </div>
      </div>
      <div
        className={`w-full ${bgcolorCover} text-white  justify-center items-center flex`}
      >
        {coverContent}
      </div>
    </div>
  );
}

export default Card;