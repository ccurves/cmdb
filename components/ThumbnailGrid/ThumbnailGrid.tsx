import Link from "next/link";
import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { ActorCredits } from "../../data/types";
import Thumbnail from "../Thumbnail/Thumbnail";

type Props = { credits: ActorCredits[] };

const ThumbnailGrid = (props: Props) => {
  return (
    <div className="flex flex-col m-auto p-auto">
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {props.credits.map((credit) => (
            <Link href={`/${credit.id}`} key={credit.id}>
              <div className="inline-block px-3 cursor-pointer hover:opacity-80 duration-300">
                <div className="w-52 h-64 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="relative h-full">
                    <Thumbnail
                      imgUrl={
                        credit.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + credit.poster_path
                          : "/no_image.jpg"
                      }
                    />
                    <div className="absolute w-full bottom-0 px-4 py-2 rounded-b-lg bg-zinc-800">
                      <h2 className="text-white text-center text-sm truncate">
                        {credit.original_title}
                      </h2>

                      <p className="text text-zinc-400 text-center text-xs truncate">
                        {credit.character}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailGrid;
