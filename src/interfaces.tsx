export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}
export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

type Dispatch = React.Dispatch<IAction>;

export interface IEpisodeProps {
  episodes: IEpisode[];
  favorites: IEpisode[];
  toggleFavAction: (episode: IEpisode, dispatch: Dispatch) => IAction;
  store: { state: IState; dispatch: any };
}
