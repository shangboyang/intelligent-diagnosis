
import {
  DISEASE_START_SORT,
  DISEASE_END_SORT,
} from './constant'

// 排序ActionCreate
export function startSortAction(selectedParams) {
  return {
    type: DISEASE_START_SORT
  }
}

export function endSortAction() {
  return {
    type: DISEASE_END_SORT
  }
}

/*
1. 首先考察含红Tag的问题：若选红Tag，则含红Tag的病优先，且红Tag总数越多的病越优先；若未选红Tag，则所选项目对应的病优先。
2. 然后考察Tag总数（包含红Tag），Tag多的病优先。
3. 最后，发病率越高的病，越优先；未写发病率，则默认为0。
4. 若还有并列，则按首字母排序。
*/

export function submitForm(selectedParams) {
  return (getState, dispatch) => {
    console.log('getState', getState);
    console.log('dispatch', dispatch);
  }
}
