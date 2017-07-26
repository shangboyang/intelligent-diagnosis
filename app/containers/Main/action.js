
import {
  DISEASE_START_SORT,
  DISEASE_END_SORT,
} from './constant'

// 排序ActionCreate
export function startSortAction() {
  return {
    type: DISEASE_START_SORT,
    diArr: [],
  }
}

export function endSortAction(diArr) {
  return {
    type: DISEASE_END_SORT,
    diArr: diArr
  }
}

/**
 * 提交表单
 * @param  {[type]} selectedParams [description]
 * @return {[type]}                [description]
 */
export function submitForm(Diseases, params) {

  return (dispatch, getState) => {

    dispatch(startSortAction())

    let selectors = params.checkboxes.querySelectorAll('div input[type="checkbox"]:checked') || []
    let sortedDiArr = getTagsMatchedDiArr(Diseases, params.currRadios, selectors)

    let baseRankArr = getDiArrFilterByWeekTags(selectors, getDiArrByCountKeys(sortedDiArr))
    sortedDiArr = concatRankDiArr(baseRankArr)

    dispatch(endSortAction(sortedDiArr))
  }
}

function concatRankDiArr(rankDiArr) {
  let baseDiArr = [];
  rankDiArr.length > 0 && rankDiArr.map((subArr, idx) => {
    baseDiArr = baseDiArr.concat(subArr)
  })

  return baseDiArr;
}

/**
 * 通过特定标识排序
 */
function getDiArrSortByFilterName(diArr, filterProp) {
  return diArr.length > 0  && diArr.sort(function(a, b) {
    let d1 = a[filterProp]
    let d2 = b[filterProp]
    return d2 - d1
  })
}

/**
 * 根据红tag重排序疾病数组
 */
function getDiArrByCountKeys(diArr) {

  if (diArr.length <= 0) return;

  let rankDiArr = [];
  let redCountBaseNo = diArr[0].keyMatchedNo;
  let baseObj = {};

  diArr.map((di, idx) => {

    if (!baseObj['key_' + di.keyMatchedNo]) {
      baseObj['key_' + di.keyMatchedNo] = []
      baseObj['key_' + di.keyMatchedNo].push(di);
    } else {
      baseObj['key_' + di.keyMatchedNo].push(di);
    }

  })

  for (let o in baseObj) {
    rankDiArr.push(baseObj[o])
  }

  // 直接排序
  return getSubDiArrSortByAllTagsNo(rankDiArr)
}

/**
 * step2 result: 根据所有tag数排序子数组
 */
function getSubDiArrSortByAllTagsNo(rankDiArr) {
  let newRankArr = []
  rankDiArr.length > 0 && rankDiArr.map((arr, idx) => {
    newRankArr.push(getDiArrSortByFilterName(arr, 'allTagsMatchedNo'))
  })
  return newRankArr
}

/**
 * Sort all tags
 */
function getTagsMatchedDiArr(Diseases, currRadios, selectors) {

  let keyNameArr = []              // 被选中标红tags组
  let allTagsNameArr = []          // 被选中所有tags组
  let countedArr = []

  for (let i in currRadios) {
    // red tags
    if (currRadios[i].match(/key/g)) keyNameArr.push(currRadios[i])
    // all tags
    if (!i.match(/sex|continued/g)) {
      allTagsNameArr.push({
        [i]: currRadios[i]
      })
    }
  }

  for (let i = 0, len = selectors.length; i < len; i++) {
    // red tags
    if (selectors[i].name.match(/key/g)) keyNameArr.push(selectors[i].name)
    // black + red + green
    allTagsNameArr.push(selectors[i].name)
  }

  console.log('key tags 选中的红色标签::::::', keyNameArr);
  console.log('all tags 选中的所有标签::::::', allTagsNameArr);

  for (let d in Diseases) {

    let object = {}
    object.keyMatchedNo = 0      // red tags
    object.allTagsMatchedNo = 0  // all tags
    object.weekTagsMatchedNo = 0 // green tags
    // 计算红tag个数
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
    // ------------------------------------------------------------------------

    // 计算所有tag个数
    for (let i = 0, len = allTagsNameArr.length; i < len; i++) {

      if (typeof allTagsNameArr[i] === 'object') {
        // ageLimit
        if (allTagsNameArr[i]['age']) {
          +allTagsNameArr[i]['age'] >= object.detail.ageLimit[0] && +allTagsNameArr[i]['age'] <= object.detail.ageLimit[1] &&
            object.allTagsMatchedNo++
        }

        if (allTagsNameArr[i]['body']) {
          for (let b in object.detail.bodyParts) {
            // console.log(b);
            if (b === allTagsNameArr[i]['body'] && object.detail.bodyParts[b]) {
              object.allTagsMatchedNo++
            }
          }
        }

        if (allTagsNameArr[i]['progress']) {
          for (let p in object.detail.progress) {
            // console.log(p);
            if (p === allTagsNameArr[i]['progress'] && object.detail.progress[p]) {
              object.allTagsMatchedNo++
            }
          }
        }

      } else {

        for (let c in object.detail.checkbox) {

          if (allTagsNameArr[i] === c && object.detail.checkbox[c]) object.allTagsMatchedNo++
          if (allTagsNameArr[i] === c && object.detail.checkbox[c] && !!c.match(/green/g)) object.weekTagsMatchedNo++
        }

      }

    }

    countedArr.push(object)

  }

  return getDiArrSortByFilterName(countedArr, 'keyMatchedNo');

}

/**
 * 重新以All Tags切分子数组
 */
function cutSubDiArrByAllTagsNo(rankDiArr) {

  let newRankDiArr = []

  rankDiArr.length > 0 && rankDiArr.map((subArr, idx) => {
    let o = {}

    subArr.length > 0 && subArr.map((di, i) => {
      if (o['All_' + di.allTagsMatchedNo]) {
        o['All_' + di.allTagsMatchedNo].push(di)
      } else {
        o['All_' + di.allTagsMatchedNo] = []
        o['All_' + di.allTagsMatchedNo].push(di)
      }
    })

    for (let d in o) {
      newRankDiArr.push(o[d])
    }

  })

  console.log('newRankDiArr============', newRankDiArr)

  // 重新依据allTagsMatchedNo来
  return newRankDiArr
}

/**
 * Week Tag 调整优先级
 */
function getDiArrFilterByWeekTags(selectors, rankDiArr) {

  let weekFlag = false // 一次submit weekFlag是固定的
  let weekDiFootArr = []
  let formatRankDiArr = []

  for (let i = 0, len = selectors.length; i < len; i++) {
    if (selectors[i].name.match(/green/g)) weekFlag = true
  }
  // 选了绿tag的数组增加数组细节
  rankDiArr = weekFlag ? cutSubDiArrByAllTagsNo(rankDiArr) : rankDiArr

  rankDiArr.length > 0 && rankDiArr.map((subArr, index) => {
    // 有绿tag的筛选逻辑
    if (weekFlag) {
      subArr.length > 1 ? formatRankDiArr.push(getDiArrSortByFilterName(subArr, 'weekTagsMatchedNo')) :
        formatRankDiArr.push(subArr)

    // 无绿tag的筛选逻辑
    } else {
      subArr.map((di, idx) => {

        di.hasWeekTagNo = 0 // 疾病含绿个数0q
        for (let c in di.detail.checkbox) {
          if (c.match(/green/g) && di.detail.checkbox[c]) di.hasWeekTagNo++
        }

        if (di.hasWeekTagNo > 0) {
          weekDiFootArr.push(di)
          subArr.splice(idx, 1, false) // splice ‘s flag
        }

      })
      // 创建新子数组
      let newSubArr = []
      subArr.map((di, idx) => {
        if (di) newSubArr.push(di)
      })
      // 重新整理
      formatRankDiArr.push(newSubArr)
    }

  })

  !weekFlag && formatRankDiArr.push(weekDiFootArr)

  return formatRankDiArr
}
