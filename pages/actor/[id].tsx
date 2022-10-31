import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Header from "../../components/Header/Header";
import { actorUrl } from "../../config";
import { basicFetch } from "../../data/fetchFunctions";
import { Actor } from "../../data/types";

type Props = {
  actor: Actor;
};

const Actors: NextPage<Props> = ({ actor }) => {
  const router = useRouter();
  // console.log(router.query.movie);
  return (
    <main>
      <Header />
      <Breadcrumb
        title={actor.name}
        movie={router.query.movie}
        movie_id={router.query.movie_id}
      />
    </main>
  );
};

export default Actors;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const actorEndpoint: string = actorUrl(id);

  const actor = await basicFetch<Actor>(actorEndpoint);

  return {
    props: {
      actor,
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
