import { createSelector } from '@ngrx/store';
import { getWebSocketState } from '@app/store-selectors/get-state/get-websocket-state';
import * as interfaces from '@app/interfaces/_index';

export const getWebSocketInitId = createSelector(
  getWebSocketState,
  (state: interfaces.WebSocketState) => state.init_id
);
