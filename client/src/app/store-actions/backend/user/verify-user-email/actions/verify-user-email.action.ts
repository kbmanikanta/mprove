import { Action } from '@ngrx/store';
import * as api from '@app/api/_index';
import * as actionTypes from '@app/store-actions/action-types';

export class VerifyUserEmailAction implements Action {
  readonly type = actionTypes.VERIFY_USER_EMAIL;

  constructor(public payload: api.VerifyUserEmailRequestBody['payload']) {}
}
