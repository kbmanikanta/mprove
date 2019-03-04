import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import * as actions from '@app/store-actions/actions';
import * as actionTypes from '@app/store-actions/action-types';

@Injectable()
export class CreateFolderFailEffect {
  @Effect() createFolderFail$: Observable<Action> = this.actions$.pipe(
    ofType(actionTypes.CREATE_FOLDER_FAIL),
    mergeMap((action: actions.CreateFolderFailAction) => {
      return of(new actions.BackendFailAction({ error: action.payload.error }));
    })
  );

  constructor(private actions$: Actions) {}
}
