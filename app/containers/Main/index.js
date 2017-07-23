import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Header from '../../components/Header'
import Content from '../../components/Content'
import './style.less'
import IMG_ACE from './images/ace.jpg'
import IMG_LUFFY from './images/luffy.jpg'
import * as AppActions from '../App/action'
import * as MainActions from './action'
import Diseases from '../../data/disease'

console.log('Diseases', Diseases);
const Actions = Object.assign({}, AppActions, MainActions)

class Main extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props)

    this.state = {
      diArr: []
    }

    this.currRadio = {
      sex      : 'M',
      age      : '',
      body     : 'left',
      continued: '0',
      progress : 'key_day',
    }

    this.changeSexHandler = this.changeSexHandler.bind(this)
    this.changeAgeHandler = this.changeAgeHandler.bind(this)
    this.changeBodyHandler = this.changeBodyHandler.bind(this)
    this.changeContinuedHandler = this.changeContinuedHandler.bind(this)
    this.changeProgressHandler = this.changeProgressHandler.bind(this)
    this.getCheckboxValues = this.getCheckboxValues.bind(this)
    this.submitFormHandler = this.submitFormHandler.bind(this)
  }

  changeSexHandler(e) {
    this.currRadio.sex = e.target.value
  }

  changeAgeHandler(e) {
    this.currRadio.age = e.target.value
  }

  changeBodyHandler(e) {
    this.currRadio.body = e.target.value
  }

  changeContinuedHandler(e) {
    this.currRadio.continued = e.target.value
  }

  changeProgressHandler(e) {
    this.currRadio.progress = e.target.value
  }
  /**
   * step 1 先汇总所有选择的tag与红tag
   * step 2
   * @return {[type]} [description]
   */
  getCheckboxValues() {

    let selectors = this.refs.checkbox.querySelectorAll('div input[type="checkbox"]:checked') || []
    let sortedDiArr = this.getTagsMatchedDiArr(selectors)

console.log('finished sortedDiArr::::', sortedDiArr);

    let baseRankArr = this.getDiArrFilterByWeekTags(this.getDiArrByCountKeys(sortedDiArr))
console.log('baseRankArr::::::', baseRankArr);

    sortedDiArr = this.concatRankDiArr(baseRankArr)
    /*
    sortedDiArr = this.getProbabilityMatchedDiArr(sortedDiArr)
    sortedDiArr = this.getNameMatchedDiArr(sortedDiArr)
    */
console.log('sortedDiArr:::', sortedDiArr);

    return sortedDiArr
  }

  concatRankDiArr(rankDiArr) {
    let baseDiArr = [];
    rankDiArr.length > 0 && rankDiArr.map((subArr, idx) => {
      console.log(subArr);
      baseDiArr = baseDiArr.concat(subArr)
      console.log('baseDiArr' + idx, baseDiArr);
    })

    return baseDiArr;
  }

  /**
   * 通过特定标识排序
   */
  getDiArrSortByFilterName(diArr, filterProp) {
    return diArr.length > 0  && diArr.sort(function(a, b) {
      let d1 = a[filterProp]
      let d2 = b[filterProp]
      return d2 - d1
    })
  }

  getDiArrByCountKeys(diArr) {

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
    return this.getSubDiArrSortByAllTagsNo(rankDiArr)
  }

  /**
   * step2 result: 根据所有tag数排序子数组
   */
  getSubDiArrSortByAllTagsNo(rankDiArr) {
    let newRankArr = []
    rankDiArr.length > 0 && rankDiArr.map((arr, idx) => {
      newRankArr.push(this.getDiArrSortByFilterName(arr, 'allTagsMatchedNo'))
    })
    return newRankArr
  }

  // Sort all tags
  getTagsMatchedDiArr(selectors) {

    let keyNameArr = []              // 被选中标红tags组
    let allTagsNameArr = []          // 被选中所有tags组
    let countedArr = []

    for (let i in this.currRadio) {
      // red tags
      if (this.currRadio[i].match(/key/g)) keyNameArr.push(this.currRadio[i])
      // all tags
      if (!i.match(/sex|continued/g)) {
        allTagsNameArr.push({
          [i]: this.currRadio[i]
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
            if (allTagsNameArr[i] === c && object.detail.checkbox[c] && !!c.match(/week/g)) object.weekTagsMatchedNo++
          }

        }

      }

      countedArr.push(object)

    }

    return this.getDiArrSortByFilterName(countedArr, 'keyMatchedNo');

  }

  getDiArrFilterByWeekTags(rankDiArr) {
    rankDiArr.length > 0 && rankDiArr.map((subArr, index) => {
      subArr.map((o, idx) => {
        if (o.weekTagsMatchedNo > 0 && index > 0) {
          rankDiArr[index - 1].push(o) // 有week则提升一个分组
          subArr.splice(idx, 1)        // current数组删除
        }
      })
    })
    return rankDiArr
  }

  // 提交表单
  submitFormHandler() {
    const { Actions } = this.props

    const diArr = this.getCheckboxValues()

    this.setState({
      diArr: diArr
    })
    // Actions.submitForm()
  }

  render() {

    const { Actions } = this.props
    const { diArr } = this.state

    return (
      <div style={{margin: '20px 20px'}}>

        <div style={{marginBottom: '10px'}}>
          <div style={{fontSize: '16px'}}>性别：</div>
          <div>
            男 <input name="sex" type="radio" value="M" defaultChecked onClick={this.changeSexHandler}/>
            女 <input name="sex" type="radio" value="F" onClick={this.changeSexHandler}/>
          </div>
        </div>
        <div style={{marginBottom: '10px'}}>
          年龄：<input type="form" onChange={this.changeAgeHandler}/>
        </div>
        <div style={{marginBottom: '10px'}}>
          <div style={{fontSize: '16px'}}>发病部位：</div>
          <div>
            左侧 <input name="bodyParts" type="radio" defaultValue="left" defaultChecked onClick={this.changeBodyHandler}/>
            右侧 <input name="bodyParts" type="radio" defaultValue="right"  onClick={this.changeBodyHandler}/>
            <span style={{color: 'red'}}>双侧</span><input name="bodyParts" type="radio" defaultValue="key_both" onClick={this.changeBodyHandler}/>
          </div>
        </div>
        <div style={{marginBottom: '10px'}}>
          <div style={{fontSize: '16px'}}>面瘫持续时间：</div>
          <div>
            1周内 <input name="continued" type="radio" value="0" defaultChecked onClick={this.changeContinuedHandler} />
            1周~1月 <input name="continued" type="radio" value="1" onClick={this.changeContinuedHandler} />
            1月~6月 <input name="continued" type="radio" value="2" onClick={this.changeContinuedHandler} />
            6月以上 <input name="continued" type="radio" value="3" onClick={this.changeContinuedHandler} />
          </div>
        </div>
        <div style={{marginBottom: '10px'}}>
          <div style={{fontSize: '16px'}}>进展：</div>
          <div>
            <span style={{color: 'red'}}>1天内</span> <input name="progress" type="radio" value="key_day" defaultChecked onClick={this.changeProgressHandler}/>
            1天~1周 <input name="progress" type="radio" value="week" onClick={this.changeProgressHandler} />
            1周以上 <input name="progress" type="radio" value="exceedWeek" onClick={this.changeProgressHandler} />
          </div>
        </div>
        <div style={{marginBottom: '10px'}}>
          <div style={{fontSize: '16px'}}>有无：</div>
          <div ref="checkbox">
            <div>
              <input name="fever" type="checkbox"/>发烧
              <input name="ear" type="checkbox" />剧烈耳痛
              <input name="throat" type="checkbox" />剧烈咽痛
              <input name="hypertension" type="checkbox" />高血压史
              <input name="diabetes" type="checkbox" />糖尿病史
            </div>
            <div>
              <input name="eye" type="checkbox" />曾眼睑痉挛
              <input name="face" type="checkbox" />曾面瘫
              <input name="gestation" type="checkbox" />正在妊娠
              <input name="key_brow" type="checkbox" /><span style={{color: 'red'}}>抬眉困难</span>
              <input name="key_eye" type="checkbox" /><span style={{color: 'red'}}>闭眼困难</span>
            </div>
            <div>
              <input name="weekTeeth" type="checkbox" /><span style={{color: 'green'}}>一周内曾拔牙</span>
              <input name="weekFace" type="checkbox" /><span style={{color: 'green'}}>一周内曾接受面部麻醉</span>
              <input name="weekVaccine" type="checkbox" /><span style={{color: 'green'}}>一周内曾打疫苗</span>
            </div>
            <div>
              <input name="tired" type="checkbox" />易疲劳
              <input name="hearing" type="checkbox" />听力下降
              <input name="vision" type="checkbox" />视物模糊
            </div>
            <div>
              <input name="faceNumb" type="checkbox" />面瘫侧麻木
              <input name="key_face" type="checkbox" /><span style={{color: 'red'}}>面瘫侧严重外伤</span>
              <input name="skin" type="checkbox" />皮疹
            </div>
            <div>
              <input name="key_sport" type="checkbox" /><span style={{color: 'red'}}>四肢运动障碍</span>
              <input name="joint" type="checkbox" />四肢关节疼痛
              <input name="headache" type="checkbox" />剧烈头痛
            </div>
          </div>
        </div>

        <div style={{marginBottom: '10px'}}>
          <div style={{
            border: '1px solid #bbb',
            width: '150px',
            height: '40px',
            fontSize: '20px',
            lineHeight: '40px',
            textAlign: 'center'
          }} onClick={this.submitFormHandler}>确认提交</div>
        </div>
        <div>
          <div style={{fontSize: '16px'}}>选择的病可能是：</div>
          {
            diArr.map((di, idx) => {
              return (
                <div key={idx}>{idx} : {di.cname}</div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

// redux ‘s state 非 react state
function mapStateToProps(state) {
  const { intelligentReducer } = state
  return {

  }
}

function mapActionToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }

}

export default connect(mapStateToProps, mapActionToProps)(Main)
