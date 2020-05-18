import React, { useReducer } from "react";
import { IState, IAction, IEpisode } from "./interfaces";

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "TOGGLE_FAV":
      if (
        state.favorites.find((item: IEpisode) => item.id === action.payload.id)
      ) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (item: IEpisode) => item.id !== action.payload.id
          ),
        };
      } else {
        return { ...state, favorites: state.favorites.concat(action.payload) };
      }
    default:
      return state;
  }
};

export const StoreProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
