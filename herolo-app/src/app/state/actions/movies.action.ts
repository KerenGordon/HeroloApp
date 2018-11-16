import { Action } from '@ngrx/store'
import { IMovie } from '../../model';

// export const LIST_MOVIES       = '[MOVIES] Get'
export const INIT_MOVIES    = '[MOVIES] Create'
export const ADD_MOVIE    = '[MOVIE] Add'
export const DELETE_MOVIE    = '[MOVIE] Delete'
export const EDIT_MOVIE    = '[MOVIE] Edit'

export class InitMovies implements Action {
  readonly type = INIT_MOVIES

  constructor(public payload: IMovie[]) {}
}
export class AddMovie implements Action {
    readonly type = ADD_MOVIE

    constructor(public payload: IMovie) {}
}
export class EditMovie implements Action {
  readonly type = EDIT_MOVIE

  constructor(public payload: IMovie) {}
}
export class DeleteMovie implements Action {
  readonly type = DELETE_MOVIE

  constructor(public payload: IMovie) {}
}


export type Actions = InitMovies | AddMovie | EditMovie | DeleteMovie