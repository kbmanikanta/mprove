import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as actions from '@app/store-actions/actions';
import * as actionTypes from '@app/store-actions/action-types';
import * as services from '@app/services/_index';

@Injectable()
export class SetProjectTimezoneEffect {
  @Effect() setProjectTimezone$: Observable<Action> = this.actions$.pipe(
    ofType(actionTypes.SET_PROJECT_TIMEZONE),
    mergeMap((action: actions.SetProjectTimezoneAction) =>
      this.backendService.setProjectTimezone(action.payload).pipe(
        map(body => new actions.SetProjectTimezoneSuccessAction(body.payload)),
        catchError(e =>
          of(new actions.SetProjectTimezoneFailAction({ error: e }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private backendService: services.BackendService
  ) {}
}
