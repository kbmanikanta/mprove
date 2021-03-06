import { Action } from '@ngrx/store';
import * as actionTypes from '@app/store-actions/action-types';
import * as api from '@app/api/_index';

export class DeleteProjectFailAction implements Action {
  readonly type = actionTypes.DELETE_PROJECT_FAIL;

  constructor(public payload: { error: any }) {}
}
