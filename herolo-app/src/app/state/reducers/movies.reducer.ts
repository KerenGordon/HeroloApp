import * as MoviesActions from './../actions/movies.action';
import { IMovie } from 'src/app/model';


export function reducer(state: IMovie[] = [], action: MoviesActions.Actions) {

    switch(action.type) {
        case MoviesActions.ADD_MOVIE:
            return [...state, action.payload];
        case MoviesActions.INIT_MOVIES:
            return [action.payload];
        default:
            return state;
    }
}