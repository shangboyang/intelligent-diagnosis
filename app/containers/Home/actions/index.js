import {
  DISEASE_START_SORT,
  DISEASE_END_SORT,
} from '../constants'
import { executeDi } from './diAction'
import { executeIg } from './igAction'

// 排序ActionCreate
export function startSortAction() {
  return {
    type: DISEASE_START_SORT,
    diArr: [],
    igArr: [],
  }
}

export function endSortAction(diArr, igArr) {
  return {
    type: DISEASE_END_SORT,
    diArr: diArr,
    igArr: igArr,
  }
}

/**
 * 提交表单
 * @param  {[type]} selectedParams [description]
 * @return {[type]}                [description]
 */
export function submitForm(params) {

  return (dispatch, getState) => {

    dispatch(startSortAction())
    // 1.排序疾病
    let selectors = params.checkboxes.querySelectorAll('div input[type="checkbox"]:checked') || []
    let sortedDiArr = executeDi(params, selectors)
    console.log('sortedDiArr', sortedDiArr);

    // 2.排序食谱
    let sortedIgArr = executeIg(params, selectors, sortedDiArr)

    dispatch(endSortAction(sortedDiArr, sortedIgArr))
  }
}
