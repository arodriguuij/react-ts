import React, { Suspense } from "react";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./Store";
import { toggleFavAction } from "./Action";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

const FavsPage = () => {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
    favorites: state.favorites,
    toggleFavAction,
    store: { state, dispatch },
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>{" "}
    </Suspense>
  );
};

export default FavsPage;
