import * as types from '../constants/ActionType';
import * as messages from '../constants/Message';
var initialState = messages.MSG_WELCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default: return state;
  }
}
export default message;
