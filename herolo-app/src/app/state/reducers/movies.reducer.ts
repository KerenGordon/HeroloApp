import * as MoviesActions from './../actions/movies.action';
import { IMovie } from 'src/app/model';


export function reducer(state: IMovie[] = [], action: MoviesActions.Actions) {
  
  switch(action.type) {
    case MoviesActions.ADD_MOVIE:
    return [...state, action.payload];
    case MoviesActions.DELETE_MOVIE:
    return state.filter(movie => {
      return movie.imdbID !== action.payload.imdbID;
    })
    case MoviesActions.EDIT_MOVIE:
      return state.map( movie => {
        if (movie.imdbID === action.payload.imdbID) {
          let newMovieFields = movie;
          Object.keys(action.payload).forEach(field => {
            newMovieFields[field] = action.payload[field] && action.payload[field] !== movie[field] ?
            action.payload[field] : movie[field];        
          });
          return newMovieFields;
        } else return movie;
      })
    default:
    return state;
  }
}