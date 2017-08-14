/**
 * 通过特定标识排序 从大到小
 */
export const getSortArrByFilter = (arr, filterProp) => {
  return arr.length > 0  && arr.sort(function(a, b) {
    let d1 = a[filterProp]
    let d2 = b[filterProp]
    return d2 - d1
  })
}
