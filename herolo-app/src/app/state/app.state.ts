import { IMovie } from "../model";


export interface AppState {
  readonly movies: IMovie[];
}