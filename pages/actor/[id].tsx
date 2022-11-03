import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import ActorInfo from "../../components/ActorInfo/ActorInfo";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Header from "../../components/Header/Header";
import {
  actorCreditsUrl,
  actorUrl,
  IMAGE_BASE_URL,
  movieUrl,
  POSTER_SIZE,
} from "../../config";
import { basicFetch } from "../../data/fetchFunctions";
import { Actor, ActorCredits, Credits, Movie } from "../../data/types";

type Props = {
  actor: Actor;
  credits: ActorCredits[];
};

const Actors: NextPage<Props> = ({ actor, credits }) => {
  let router = useRouter();

  return (
    <main>
      <Header />
      <Breadcrumb
        title={actor.name}
        movie={router.query.movie}
        movie_id={router.query.movie_id}
      />
      <ActorInfo
        thumbUrl={
          actor.profile_path
            ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
            : "/no_image.jpg"
        }
        popularity={actor.popularity}
        name={actor.name}
        biography={actor.biography}
        birthday={actor.birthday}
        credits={credits}
      />
    </main>
  );
};

export default Actors;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const actorEndpoint: string = actorUrl(id);
  const creditsEndpoint: string = actorCreditsUrl(id);

  const actor = await basicFetch<Actor>(actorEndpoint);
  const credits = await basicFetch<Credits>(creditsEndpoint);

  return {
    props: {
      actor,
      credits: credits.cast,
    },
    revalidate: 60 * 60 * 24, //Re-build page every 24hrs
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
