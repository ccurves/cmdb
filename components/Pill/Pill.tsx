import React from "react";

type Props = {
  text: string;
  className?: string;
};

const Pill = (props: Props) => {
  return (
    <div
      className={`bg-cyan-800 text-white text-sm 
    font-bold px-2 py-1 m-2 rounded-full inline-block ${props.className}`}
    >
      {props.text}
    </div>
  );
};

export default Pill;
