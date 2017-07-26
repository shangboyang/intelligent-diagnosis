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

    // this.state = {
    //   diArr: []
    // }

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

  // 提交表单
  submitFormHandler() {
    const { Actions } = this.props

    Actions.submitForm(Diseases, {
      currRadios: this.currRadio,
      checkboxes: this.refs.checkbox,
    })
  }

  render() {

    const { Actions, diArr } = this.props

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
            <span style={{color: 'red'}}>3天内</span><input name="progress" type="radio" value="key_day" defaultChecked onClick={this.changeProgressHandler}/>
            3~10天  <input name="progress" type="radio" value="week" onClick={this.changeProgressHandler} />
            超过十天 <input name="progress" type="radio" value="exceedWeek" onClick={this.changeProgressHandler} />
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
              <input name="green_teeth" type="checkbox" /><span style={{color: 'green'}}>一周内曾拔牙</span>
              <input name="green_face" type="checkbox" /><span style={{color: 'green'}}>一周内曾接受面部麻醉</span>
              <input name="green_vaccine" type="checkbox" /><span style={{color: 'green'}}>一周内曾打疫苗</span>
            </div>
            <div>
              <input name="tired" type="checkbox" />易疲劳
              <input name="hearing" type="checkbox" />听力下降
              <input name="vision" type="checkbox" />视物模糊
            </div>
            <div>
              <input name="faceNumb" type="checkbox" />面瘫侧麻木
              <input name="green_injure" type="checkbox" /><span style={{color: 'green'}}>面瘫侧严重外伤</span>
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
            diArr && diArr.map((di, idx) => {
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
  console.log('state', state);
  return {
    diArr: intelligentReducer.diArr
  }
}

function mapActionToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  }

}

export default connect(mapStateToProps, mapActionToProps)(Main)
