/************************************************/
/********** Reducer 控制State——业务逻辑 ***********/
/************************************************/
import {
  DISEASE_START_SORT,
  DISEASE_END_SORT,
} from './constant';

const initialState = {
  diArr: []
}; // 可以是Number 或者字符串 或对象

const intelligentReducer = (state = initialState, action) => {

  switch (action.type) {
    case DISEASE_START_SORT:
      return Object.assign({}, state, {

      })
    case DISEASE_END_SORT:
      return Object.assign({}, state, {
        diArr: action.diArr
      })
    default:
      return state;
  }
};

export default intelligentReducer
