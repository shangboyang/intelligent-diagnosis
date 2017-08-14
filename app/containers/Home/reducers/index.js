/************************************************/
/********** Reducer 控制State——业务逻辑 ***********/
/************************************************/
import {
  DISEASE_START_SORT,
  DISEASE_END_SORT,
} from '../constants';

const initialState = {
  diArr: [],
  igArr: [],
}; // 可以是Number 或者字符串 或对象

const homeReducer = (state = initialState, action) => {

  switch (action.type) {
    case DISEASE_START_SORT:
      return Object.assign({}, state, {

      })
    case DISEASE_END_SORT:
      return Object.assign({}, state, {
        diArr: action.diArr,
        igArr: action.igArr,
      })
    default:
      return state;
  }
};

export default homeReducer
