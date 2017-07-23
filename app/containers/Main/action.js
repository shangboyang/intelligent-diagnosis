
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


// Sort Red keyWord
/*
getKeyTagsMatchedDiArr(selectors) {

  let keyNameArr = []          // 被选中标红tags组
  let keyMatchedDiArr = []     // 比对后命中疾病组

  for (let i in this.currRadio) {
    if (this.currRadio[i].match(/key/g)) keyNameArr.push(this.currRadio[i])
  }

  for (let i = 0, len = selectors.length; i < len; i++) {
    if (selectors[i].name.match(/key/g)) keyNameArr.push(selectors[i].name)
  }
  console.log('标红 keyNames', keyNameArr);

  for (let d in Diseases) {

    let object = {}
    object.keyMatchedNo = 0

    for (let i = 0, len = keyNameArr.length; i < len; i++) {

      for (let b in Diseases[d].bodyParts) {
        if (keyNameArr[i] === b && Diseases[d].bodyParts[b]) object.keyMatchedNo++
      }

      for (let p in Diseases[d].progress) {
        if (keyNameArr[i] === p && Diseases[d].progress[p]) object.keyMatchedNo++
      }

      for (let c in Diseases[d].checkbox) {
        if (keyNameArr[i] === c && Diseases[d].checkbox[c]) object.keyMatchedNo++
      }

    }

    object.name = d
    object.cname = Diseases[d].cname
    object.detail = Diseases[d] // origin Disease Detail Data
    keyMatchedDiArr.push(object)

  }

  return this.getDiArrSortByFilterName(keyMatchedDiArr, 'keyMatchedNo')
}
*/
/*
// 3rd Sort prop probability
getProbabilityMatchedDiArr(diArr) {
  let diseaseArr = diArr

  for (let d in diseaseArr) {
    diseaseArr[d].probability = diseaseArr[d].detail['probability']
    // 加权：base All tags
    diseaseArr[d].probabilityWeight = (diseaseArr[d].detail['probability'] / 10 + diseaseArr[d].allTagsWeght).toFixed(5)

  }
  return this.getDiArrSortByFilterName(diseaseArr, 'probabilityWeight')
}

// 4th 重复值按照 英文排列
getNameMatchedDiArr(diArr) {
  return diArr
}
*/
