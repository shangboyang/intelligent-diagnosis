/************************************************/
/********** Reducer 控制State——业务逻辑 ***********/
/************************************************/
import {
  START_SORT,
  END_SORT
} from './constant';

const initialState = {

}; // 可以是Number 或者字符串 或对象

const intelligentReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_SORT:
      return Object.assign({}, state, {

      })
    case END_SORT:
      return Object.assign({}, state, {

      })
    default:
      return state;
  }
};

export default intelligentReducer;
