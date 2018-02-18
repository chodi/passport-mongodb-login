/*
 * TODO
 *
 */
import { fromJS } from 'immutable';
import {
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,

  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,

  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,

  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from './constants';
import stateName from './stateName';

// The initial state of the App
const initialState = fromJS({
  isLoading: false,
});

function todoReducer(state = initialState, action) {
  switch (action.type) {
    // ************************************
    // GET ToDo
    // ************************************
    case GET_TODO:
      return state
        .set('isLoading', true);
    case GET_TODO_FAIL:
      return state.set('isLoading', false);
    case GET_TODO_SUCCESS:
      return state
        .set('isLoading', false);
    // ************************************
    // ADD ToDo
    // ************************************
    case ADD_TODO:
      return state
        .set('isLoading', true);
    case ADD_TODO_FAIL:
      return state
        .set('isLoading', false);
    case ADD_TODO_SUCCESS: {
      return state
        .set('isLoading', false);
    }
    // ************************************
    // DELETE ToDo
    // ************************************
    case DELETE_TODO:
      return state
        .set('isLoading', true);
    case DELETE_TODO_FAIL:
      return state
        .set('isLoading', false);
    case DELETE_TODO_SUCCESS:
      return state
        .set('isLoading', false);
    // ************************************
    // UPDATE ToDo
    // ************************************
    case UPDATE_TODO:
      return state
        .set('isLoading', true);
    case UPDATE_TODO_FAIL:
      return state
        .set('isLoading', false);
    case UPDATE_TODO_SUCCESS: {
      return state
        .set('isLoading', false);
    }
    default:
      return state;
  }
}
export default {
  stateName,
  reducer: todoReducer,
};
