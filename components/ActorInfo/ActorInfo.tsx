import React from "react";
import { getAge } from "../../helpers";
import Thumbnail from "../Thumbnail/Thumbnail";

type Props = {
  thumbUrl: string;
  popularity: number;
  name: string;
  biography: string;
  birthday: string;
};

const ActorInfo = (props: Props) => {
  return (
    <div className="relative w-full h-auto p-4">
      <div className="relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90">
        <div className="relative w-full h-96 md:h-auto md:w-1/3">
          <Thumbnail imgUrl={props.thumbUrl} />
          <div className="absolute top-4 left-4 rounded-full bg-white w-14 h-14 flex justify-center items-center text-black text-sm font-bold">
            {props.popularity}
          </div>
        </div>
        <div className="text-white px-0 py-4 md:py-0 text-center md:text-left md:px-8 w-full md:w-2/3">
          <h2 className="text-2xl md:text-4xl font-bold pb-4">{props.name}</h2>
          <h3 className="text-lg font-bold">Biography</h3>
          <p className="mb-8 text-sm md:text-md line-clamp-6">
            {props.biography ||
              `There is currently no biography for ${props.name}`}
          </p>
          <div>
            <div>
              <h3 className="text-lg font-bold">Birthday</h3>
              <div>
                <p>
                  {props.birthday} ({`${getAge(props.birthday)} years old`})
                </p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold">Known for</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorInfo;
