import { IAction, IEpisode } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const response = await fetch(URL);
  const data = await response.json();
  dispatch({ type: "FETCH_DATA", payload: data._embedded.episodes });
};

export const toggleFavAction = (episode: IEpisode, dispatch: any): IAction =>
  dispatch({ type: "TOGGLE_FAV", payload: episode });
