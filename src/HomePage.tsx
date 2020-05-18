import React, { useEffect, Suspense } from "react";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Action";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

const HomePage = () => {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    favorites: state.favorites,
    toggleFavAction,
    store: { state, dispatch },
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </>
  );
};

export default HomePage;
