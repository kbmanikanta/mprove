import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from '@app/store-actions/actions';
import * as actionTypes from '@app/store-actions/action-types';
import * as services from '@app/services/_index';

@Injectable()
export class SetUserPictureEffect {
  @Effect() saveUserPicture$: Observable<Action> = this.actions$.pipe(
    ofType(actionTypes.SET_USER_PICTURE),
    mergeMap((action: actions.SetUserPictureAction) =>
      this.backendService.setUserPicture(action.payload).pipe(
        map(body => new actions.SetUserPictureSuccessAction(body.payload)),
        catchError(e => of(new actions.SetUserPictureFailAction({ error: e })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private backendService: services.BackendService
  ) {}
}