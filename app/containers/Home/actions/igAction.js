import { getSortArrByFilter } from '../../../utils/array'
import Ingredients from '../../../data/ingredient'

export const executeIg = (params, selectors, diArr) => {
  let igRedArr = getIgObjByRedKeyTags(Ingredients, params.currRadios, selectors)
  let cuttedIgArr = cutIgArrByKeyNo(igRedArr)

  return sortIgArrByDiArr(sortIgArrByParams(cuttedIgArr, params), diArr)
}

/**
 * step1 以红keys拆分
 */
function getIgObjByRedKeyTags(Igs, currRadios, selectors) {
  let keyNameArr = []  // 被选中标红tags组
  let highLightArr = ['vision'] // 暂时只有一个视物模糊
  let countedArr = []

  for (let i = 0, len = selectors.length; i < len; i++) {
    // red tags
    if (selectors[i].name.match(/hypertension|diabetes|gestation/g)) keyNameArr.push(selectors[i].name)
  }
  console.log('keyNameArr', keyNameArr);

  for (let ig in Igs) {
    let obj = {}
    obj.keyMatchedNo = 0
    obj.hightLightNo = 0
    for (let i = 0, len = keyNameArr.length; i < len; i++) {

      for (let k in Igs[ig].keyTags) {
        if (keyNameArr[i] === k && Igs[ig].keyTags[k]) obj.keyMatchedNo++
      }

    }

    for (let i = 0, len = highLightArr.length; i < len; i++) {
      for (let h in Igs[ig].highLight) {
        if (highLightArr[i] === h && Igs[ig].highLight[h]) obj.hightLightNo++
      }
    }
    obj.name = ig
    obj.cname = Igs[ig].cname
    obj.detail = Igs[ig] // origin Disease Detail Data

    countedArr.push(obj)
  }

  return getSortArrByFilter(countedArr, 'keyMatchedNo')
}

/**
 * 通过红tags切分食谱数组
 */
function cutIgArrByKeyNo(igArr) {

  let igObj = {}
  let newIgArr = []
  igArr.length > 0 && igArr.map((ig, index) => {
    if (igObj['key_' + ig.keyMatchedNo]) {
      igObj['key_' + ig.keyMatchedNo].push(ig)
    } else {
      igObj['key_' + ig.keyMatchedNo] = []
      igObj['key_' + ig.keyMatchedNo].push(ig)
    }
  })

  for (let i in igObj) {
    newIgArr.push(igObj[i])
  }

  return newIgArr
}

function sortIgArrByParams(igArr, params) {
  // step2
  let sortedHightLightArr = []
  igArr.length > 0 && igArr.map((subArr, idx) => {
    if (subArr.length > 1) {
      subArr = getSortArrByFilter(subArr, 'hightLightNo')
      // cut subArr by hightLightNo
      let subIgObj = {}
      subArr.map((ig, j) => {
        if (+ig.hightLightNo > 0) {
          cutHlArr(subIgObj, 1, ig)
        } else {
          cutHlArr(subIgObj, 2, ig)
        }
      })

      function cutHlArr(obj, type, currIg) {
        if (obj['hl_' + type]) {
          obj['hl_' + type].push(currIg)
        } else{
          obj['hl_' + type] = []
          obj['hl_' + type].push(currIg)
        }
      }

      for (let s in subIgObj) {
        sortedHightLightArr.push(subIgObj[s])
      }

    } else {
      sortedHightLightArr.push(subArr)
    }

  })
  return getIgArrByParams(sortedHightLightArr, params)
}

function getIgArrByParams(igArr, params) {
  console.log(params.currRadios);

  let sortedByParams = []
  let age = +params.currRadios.age || -1
  let ageType;
  let currContinuedNo = +params.currRadios.continued + 1 // 当前持续时间

  switch (true) {
    case age >= 0 && age <= 1: ageType = 'baby'; break;
    case age >= 2 && age <= 11: ageType = 'child'; break;
    case age >= 12 && age <= 17: ageType = 'teenager'; break;
    case age >= 18 && age <= 30: ageType = 'youth'; break;
    case age >= 30 && age <= 49: ageType = 'prime'; break;
    case age >= 50: ageType = 'middle'; break;
    default: ageType = 'none'
  }

  igArr.length > 0 && igArr.map((subArr, idx) => {
    if (subArr.length > 1) {
      subArr.map((ig, j) => {
        if (params.currRadios.sex === 'F') {
          ig.sexMatchedNo = ig.detail.sex[1] > 0 ? 1 : 0
        } else {
          ig.sexMatchedNo = ig.detail.sex[0] > 0 ? 1 : 0
        }
        // age
        ig.ageMatchedNo = ig.detail.ages[ageType] ? 1 : 0
        // continued
        ig.continuedNo = ig.detail.continued['stage' + currContinuedNo] ? 1 : 0
      })

      subArr = getSortArrByFilter(subArr, 'sexMatchedNo')

      // subArr = getSortArrByFilter(subArr, 'ageMatchedNo')

      sortedByParams.push(subArr)
    } else {
      sortedByParams.push(subArr)
    }
  })

  /*
  sortedByParams = cutIgArrBySex(sortedByParams)
  sortedByParams = cutIgArrByAge(sortedByParams)
  sortedByParams = cutIgArrByContinued(sortedByParams)
  */

  sortedByParams = cugIgArrByParams(sortedByParams, 'sexMatchedNo', true, 'ageMatchedNo')
  sortedByParams = cugIgArrByParams(sortedByParams, 'ageMatchedNo', true, 'continuedNo')
  sortedByParams = cugIgArrByParams(sortedByParams, 'continuedNo', false, '')

  // 以固定参数拆分数组
  function cugIgArrByParams(igArr, currPropNo, nextSortFlag, nextSortPropNo) {
    let newIgArr = []
    igArr.length > 0 && igArr.map((subArr, idx) => {
      let o = {}
      subArr.map((ig, i) => {
        if (!o[currPropNo + '_' + ig[currPropNo]]) o[currPropNo + '_' + ig[currPropNo]] = []
        o[currPropNo + '_' + ig[currPropNo]].push(ig)
      })

      for (let ig in o) {
        if (o[ig].length > 0 && nextSortFlag) o[ig] = getSortArrByFilter(o[ig], nextSortPropNo) // 排序年龄
        newIgArr.push(o[ig])
      }

    })
    console.log(''+ currPropNo, newIgArr);
    return newIgArr
  }

  /*
  function cutIgArrBySex(igArr) {
    let newIgArr = []
    igArr.length > 0 && igArr.map((subArr, idx) => {
      let o = {}
      subArr.map((ig, i) => {
        if (!o['sexMatchedNo_' + ig.sexMatchedNo]) o['sexMatchedNo_' + ig.sexMatchedNo] = []
        o['sexMatchedNo_' + ig.sexMatchedNo].push(ig)
      })

      for (let ig in o) {
        if (o[ig].length > 0) o[ig] = getSortArrByFilter(o[ig], 'ageMatchedNo') // 排序年龄
        newIgArr.push(o[ig])
      }
    })
    return newIgArr
  }

  function cutIgArrByAge(igArr) {
    let newIgArr = []
    igArr.length > 0 && igArr.map((subArr, idx) => {
      let o = {}
      subArr.map((ig, i) => {
        if (!o['ageMatchedNo_' + ig.ageMatchedNo]) o['ageMatchedNo_' + ig.ageMatchedNo] = []
        o['ageMatchedNo_' + ig.ageMatchedNo].push(ig)
      })

      for (let ig in o) {
        if (o[ig].length > 0) o[ig] = getSortArrByFilter(o[ig], 'continuedNo') // 排序持续时间
        newIgArr.push(o[ig])
      }
    })
    return newIgArr
  }

  function cutIgArrByContinued(igArr) {
    let newIgArr = []
    igArr.length > 0 && igArr.map((subArr, idx) => {
      let o = {}
      subArr.map((ig, i) => {
        if (!o['continuedNo_' + ig.continuedNo]) o['continuedNo_' + ig.continuedNo] = []
        o['continuedNo_' + ig.continuedNo].push(ig)
      })

      for (let ig in o) {
        // if (o[ig].length > 0) o[ig] = getSortArrByFilter(o[ig], 'continuedNo') // 排序持续时间
        newIgArr.push(o[ig])
      }
    })
    return newIgArr
  }
  */
  return sortedByParams;
}
/**
 * 按照疾病顺序进行排列
 */
function sortIgArrByDiArr(igArr, diArr) {
  let newIgArr = []
  igArr.length > 0 && igArr.map((subArr, idx) => {
    let newSubIgArr = subArr
    // 如果还有重复的分类 递归调用
    if (subArr.length > 1) {
      let currIndex = 0
      newSubIgArr = recursion(subArr)
      // 递归筛选
      function recursion(igArr) {

        if (igArr.length === 1 || currIndex === diArr.length) return igArr
        let leftIgArr = [] // 有当前疾病
        let rightIgArr = [] // 无当前疾病
        igArr.map((ig, idx) => {
          if (ig.detail.diseases[diArr[currIndex].name]) {
            leftIgArr.push(ig)
          } else {
            rightIgArr.push(ig)
          }
        })
        currIndex++

        return recursion(leftIgArr).concat(recursion(rightIgArr))
      }

    }
    newIgArr = newIgArr.concat(newSubIgArr)
  })
  console.log('final::::', newIgArr);
  return newIgArr
}
