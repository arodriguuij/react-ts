import React from "react";
import { IEpisode } from "./interfaces";

const EpisodeList = (props: any): Array<JSX.Element> => {
  const {
    episodes,
    toggleFavAction,
    favorites,
    store: { dispatch },
  } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        {episode.image ? (
          <img
            src={episode.image.medium}
            alt={`Rick and Morty ${episode.name}`}
          />
        ) : null}
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} - Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(episode, dispatch)}
          >
            {favorites.includes(episode) ? "unFAV" : "FAV"}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodeList;
