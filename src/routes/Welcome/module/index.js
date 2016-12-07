import request from '../../../util/request';
import update from 'react/lib/update';
import { push } from 'react-router-redux';

const ACTION_HANDLERS = {};

const initialState = {};
export default function welcomeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
