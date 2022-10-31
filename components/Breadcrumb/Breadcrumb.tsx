import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  movie?: string | string[] | undefined;
  movie_id?: string | string[] | undefined;
};

const Breadcrumb = ({ title, movie, movie_id }: Props) => {
  return (
    <div className="bg-zinc-800">
      <div className="flex items-center max-w-7xl m-auto p-4 text-white text-lg">
        <Link href="/">
          <span className="hover:placeholder-opacity-80 cursor-pointer duration-300">
            Home
          </span>
        </Link>
        {movie && (
          <Link href={`/${movie_id}`}>
            <div className="cursor-pointer flex">
              <span className="block px-2">|</span>
              <span className="font-bold truncate">{movie}</span>
            </div>
          </Link>
        )}

        <span className="block px-2">|</span>
        <span className="font-bold truncate">{title}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
