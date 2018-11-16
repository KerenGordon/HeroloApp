import * as MoviesActions from './../actions/movies.action';
import { IMovie } from 'src/app/model';


export function reducer(state: IMovie[] = [], action: MoviesActions.Actions) {

    switch(action.type) {
        case MoviesActions.ADD_MOVIE:
            return [...state, action.payload];
        case MoviesActions.INIT_MOVIES:
            return [action.payload];
        case MoviesActions.DELETE_MOVIE:
            return state.filter(movie => {
              console.log('movie', movie)
              return movie.imdbID !== action.payload.imdbID;
            })
        default:
            return state;
    }
}