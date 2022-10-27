import Image from "next/image";
import React from "react";

type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => {
  return (
    <Image
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      className="rounded-bg"
      layout="fill"
      objectFit="cover"
      src={imgUrl}
      alt="thumbnail"
    />
  );
};

export default Thumbnail;
