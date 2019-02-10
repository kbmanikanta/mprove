import { Action } from '@ngrx/store';
import * as actionTypes from '@app/store-actions/action-types';

export class SetLayoutNeedSaveTrueAction implements Action {
  readonly type = actionTypes.SET_LAYOUT_NEED_SAVE_TRUE;

  constructor() {}
}
