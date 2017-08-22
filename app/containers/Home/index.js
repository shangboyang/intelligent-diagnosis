import React, {Component} from 'react'
import { Link } from 'react-router'
import { Connect } from './connect'
import './style.less'
import IMG_ACE from './images/ace.jpg'
import IMG_LUFFY from './images/luffy.jpg'
import MAN from './images/man.png'
import { Layout, Button, Checkbox, Radio, Row, Col } from 'antd'

const RadioGroup = Radio.Group
const { Header, Footer, Sider, Content } = Layout

class Home extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props)

    this.currRadio = {
      sex      : 'M',
      age      : '',
      body     : 'left',
      continued: '0',
      progress : 'key_day',
    }

    this.state = {
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
    console.log(e, 'dddd');
    this.currRadio.sex = e.target.value
    this.setState({
      sex: e.target.value
    })
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

    Actions.submitForm({
      currRadios: this.currRadio,
      checkboxes: this.refs.checkbox,
    })
  }

  render() {
    console.log('Home this', this);
    const { router, Actions, diArr, igArr } = this.props

    return (

      <div>
        <Layout>

          <Header style={{background: '#fff'}}>
            <div className={'header-bar'}>
              <Button type="primary" size={'large'}>首页</Button>
              <Button  size={'large'} onClick={ e => router.push('/foreign')}>国外专家</Button>
              <Button  size={'large'} onClick={ e => router.push('/about')}>关于我们</Button>
            </div>
          </Header>

          <Content style={{background: '#f8fbfe'}}>

            <div className={'content-man'}>
              <img className="man" src={ MAN }></img>

              <div className={'content-man-left'}>
                <div className="checkbox-title">既往有无（可多选）</div>
                <div>
                  <div>
                    <Checkbox className="checkbox checkbox-left" name="green_face">一周内有面部麻醉</Checkbox>
                    <Checkbox className="checkbox checkbox-left" name="face">曾面瘫</Checkbox>
                  </div>
                  <div>
                    <Checkbox className="checkbox checkbox-left" name="faceNumb">面瘫侧麻木</Checkbox>
                    <Checkbox className="checkbox checkbox-left" name="green_injure">面瘫侧外伤</Checkbox>
                  </div>
                  <div>
                    <Checkbox className="checkbox checkbox-left" name="diabetes">糖尿病史</Checkbox>
                    <Checkbox className="checkbox checkbox-left" name="green_teeth">一周内曾拔牙</Checkbox>
                  </div>
                  <div>
                    <Checkbox className="checkbox checkbox-left" name="hypertension">高血压史</Checkbox>
                    <Checkbox className="checkbox checkbox-left" name="green_vaccine">一周内曾打疫苗</Checkbox>
                  </div>
                </div>
              </div>

              <div className={'content-man-right'}>
                <div className="checkbox-title">有无此情况（可多选）</div>
                <div>
                  <div>
                    <Checkbox className="checkbox checkbox-left2" name="fever">发烧</Checkbox>
                    <Checkbox className="checkbox checkbox-left2" name="headache">剧烈头痛</Checkbox>
                    <Checkbox className="checkbox checkbox-left2" name="tired">易疲劳</Checkbox>
                  </div>
                  <div>
                    <Checkbox className="checkbox checkbox-left2" name="ear">剧烈耳鸣</Checkbox>
                    <Checkbox className="checkbox checkbox-left2" name="hearing">听力下降</Checkbox>
                  </div>
                  <div>
                    <Checkbox className="checkbox checkbox-left2" name="key_eye">闭眼困难</Checkbox>
                    <Checkbox className="checkbox checkbox-left2" name="key_brow">抬眉困难</Checkbox>
                  </div>
                  <div>
                    <Checkbox className="checkbox checkbox-left2" name="throat">剧烈咽痛</Checkbox>
                    <Checkbox className="checkbox checkbox-left2" name="skin">皮疹</Checkbox>
                  </div>
                </div>
              </div>

              <div className={'content-man-middle'}>
                <Checkbox className="checkbox checkbox-left2" name="gestation">正在妊娠</Checkbox>
              </div>

              <div className={'content-man-bottom'}>
                <Checkbox className="checkbox checkbox-left2" name="key_sport">四肢运动障碍</Checkbox>
                <Checkbox className="checkbox checkbox-left2" name="joint">四肢关节疼痛</Checkbox>
              </div>

              <div className={'content-title'}>
                <h1>智能预诊</h1>
                <div>Intelligebt prediction diagnosis</div>
              </div>

              <div className={'content-select'}>
                <Row>
                  <Col className="content-select-col content-select-age" span={4}>
                    <div className="context">
                      <label><i>*</i>年龄</label>
                      <input name="age" type="text" placeholder="填写年龄大小"></input>
                    </div>
                  </Col>
                  <Col className="content-select-col content-select-sex" span={3}>
                    <div className="context">
                      <label><i>*</i>性别</label>
                      <div name="sex">选择性别</div>
                    </div>
                    <div className="icon"></div>
                    <div className="selectbox">
                      <RadioGroup className="box" onChange={this.changeSexHandler} value={this.state.sex}>
                        <div><Radio value={'M'}>男性</Radio></div>
                        <div><Radio value={'F'}>女性</Radio></div>
                      </RadioGroup>
                    </div>
                  </Col>
                  <Col className="content-select-col content-select-body" span={3}>
                    <div className="context">
                      <label >发病部位</label>
                      <div name="body">选择病部位</div>
                    </div>
                    <div className="icon"></div>
                    <div className="selectbox">
                      <RadioGroup className="box" onChange={this.changeSexHandler} value={this.state.sex}>
                        <div><Radio value={'left'}>左侧</Radio></div>
                        <div><Radio value={'right'}>右侧</Radio></div>
                        <div><Radio value={'key_both'}>双侧</Radio></div>
                      </RadioGroup>
                    </div>
                  </Col>
                  <Col className="content-select-col content-select-body content-select-conti" span={4}>
                    <div className="context">
                      <label>持续时间</label>
                      <div name="continued">面瘫持续时间</div>
                    </div>
                    <div className="icon"></div>
                    <div className="selectbox">
                      <RadioGroup className="box box2" onChange={this.changeSexHandler} value={this.state.sex}>
                        <div><Radio value={'0'}>1周内</Radio></div>
                        <div><Radio value={'1'}>1周-1月</Radio></div>
                        <div><Radio value={'2'}>1月-6月</Radio></div>
                        <div><Radio value={'3'}>6月以上</Radio></div>
                      </RadioGroup>
                    </div>
                  </Col>
                  <Col className="content-select-col content-select-body content-select-prog" span={5}>
                    <div className="context">
                      <label>进展至最重</label>
                      <div name="progress">多久病情进展到最重</div>
                    </div>
                    <div className="icon"></div>
                    <div className="selectbox">
                      <RadioGroup className="box box2" onChange={this.changeSexHandler} value={this.state.sex}>
                        <div><Radio value={'key_day'}>3天内</Radio></div>
                        <div><Radio value={'week'}>3~10天</Radio></div>
                        <div><Radio value={'exceedWeek'}>超过10天</Radio></div>
                      </RadioGroup>
                    </div>
                  </Col>
                  <Col className="content-select-col content-select-body content-select-ifnot" span={5}>
                    <div className="context">
                      <label>病因</label>
                      <div name="ifnot">是否已明确病因</div>
                    </div>
                    <div className="icon"></div>
                    <div className="selectbox">
                      <RadioGroup className="box box3" onChange={this.changeSexHandler} value={this.state.sex}>
                        <div><Radio value={'0'}>尚不清楚病因</Radio></div>
                        <div><Radio value={'1'}>贝尔氏面瘫</Radio></div>
                        <div><Radio value={'2'}>医源性损伤</Radio></div>
                        <div><Radio value={'3'}>胆脂瘤</Radio></div>
                        <div><Radio value={'4'}>腮腺肿瘤</Radio></div>
                        <div><Radio value={'5'}>莱姆病</Radio></div>
                        <div><Radio value={'6'}>中耳炎</Radio></div>
                        <div><Radio value={'7'}>贝尔氏面瘫</Radio></div>
                        <div><Radio value={'8'}>亨特氏综合征</Radio></div>
                        <div><Radio value={'9'}>流感疫苗不良反应</Radio></div>
                        <div><Radio value={'10'}>外伤后面神经损害</Radio></div>
                        <div><Radio value={'11'}>自身免疫性疾病</Radio></div>
                        <div><Radio value={'12'}>脑出血</Radio></div>
                        <div><Radio value={'13'}>颅内肿瘤</Radio></div>
                        <div><Radio value={'14'}>脑梗</Radio></div>
                      </RadioGroup>
                    </div>
                  </Col>
                </Row>

              </div>

              <div className={'content-btn'}>
                <Button className="content-btn-submit" type="primary">确定信息</Button>
              </div>

            </div>

          </Content>

          <Footer>

          </Footer>

        </Layout>

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

        <div style={{width: '200px', float: 'left'}}>
          <div style={{fontSize: '16px'}}>选择的病可能是：</div>
          {
            diArr && diArr.map((di, idx) => {
              return (
                <div key={idx}>{idx} : {di.cname}</div>
              )
            })
          }
        </div>
        <div style={{width: '200px', float: 'left'}}>
          <div style={{fontSize: '16px'}}>推荐的食谱是：</div>
          {
            igArr && igArr.map((ig, idx) => {
              return (
                <div key={idx}>{idx} : {ig.cname}</div>
              )
            })
          }
        </div>

      </div>
    )
  }
}



export default Connect(Home)
