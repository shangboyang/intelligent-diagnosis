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

import * as Diseases from '../../data/disease'

console.log('Diseases', Diseases);


class Main extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props)

  }

  changeSexHanler() {
    console.log('ddd');
  }

  changeAgeHandler() {
    console.log(this.refs.d.value)
  }

  changeBodyHanler() {

  }
  submitFormHandler() {
    console.log('submit');
  }

  render() {

    const { MainActions } = this.props
    console.log(this);
    return (
      <div>

        <div>
          <div>性别：</div>
          <div>
            男 <input name="sex" type="radio" value="M" checked onChange={this.changeSexHanler.bind(this, 'M')}/>
            女 <input name="sex" type="radio" value="F" onChange={this.changeSexHanler.bind(this, "F")}/>
          </div>
        </div>
        <div>
          年龄：<input ref="d" type="form"/>
        </div>
        <div>
          发病部位：
          <div>
            左侧 <input name="bodyParts" type="radio" value="0" checked onChange={this.changeBodyHanler.bind(this, 0)}/>
            右侧 <input name="bodyParts" type="radio" value="1" onChange={this.changeBodyHanler.bind(this, 1)}/>
            <span style={{color: 'red'}}>双侧</span><input name="bodyParts" type="radio" value="2" onChange={this.changeBodyHanler.bind(this, 2)}/>
          </div>
        </div>
        <div>
          面瘫持续时间：
          <div>
            1周内 <input name="continued" type="radio" value="0" checked  />
            1周~1月 <input name="continued" type="radio" value="1" />
            1月~6月 <input name="continued" type="radio" value="2" />
            6月以上 <input name="continued" type="radio" value="3" />
          </div>
        </div>
        <div>
          进展：
          <div>
            <span style={{color: 'red'}}>1天内</span> <input name="progress" type="radio" value="0" checked/>
            1天~1周 <input name="progress" type="radio" value="1" />
            1周以上 <input name="progress" type="radio" value="2" />
          </div>
        </div>
        <div>
          有无：
          <div>
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
               <input name="weekTeeth" type="checkbox" />一周内曾拔牙
               <input name="weekFace" type="checkbox" />一周内曾接受面部麻醉
               <input name="weekVaccine" type="checkbox" />一周内曾打疫苗
            </div>
            <div>
               <input name="tired" type="checkbox" />易疲劳
               <input name="hearing" type="checkbox" />听力下降
              <input name="vision" type="checkbox" />视物模糊
            </div>
            <div>
               <input name="faceNumb" type="checkbox" />面瘫侧麻木
               <input name="key_face" type="checkbox" /><span style={{color: 'red'}}>面瘫侧严重外伤</span>
               <input name="headache" type="checkbox" />皮疹
            </div>
            <div>
               <input name="checkbox" type="checkbox" /><span style={{color: 'red'}}>四肢运动障碍</span>
               <input name="checkbox" type="checkbox" />四肢关节疼痛
               <input name="checkbox" type="checkbox" />剧烈头痛
            </div>
          </div>
        </div>

        <div>
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
          <h3>选择的病可能是：</h3>
        </div>
      </div>
    )
  }
}

// redux ‘s state 非 react state
function mapStateToProps(state) {
  return {}
}

function mapActionToProps(dispatch) {
  return {
    MainActions: bindActionCreators(AppActions, dispatch)
  }

}

export default connect(mapStateToProps, mapActionToProps)(Main)
