import React, { Component } from 'react'
import { Layout, Button } from 'antd'

const { Header, Content, Footer } = Layout

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let div = document.querySelector('.video')
    let embed = document.createElement('embed')
    embed.setAttribute('src', 'http://player.youku.com/player.php/Type/Folder/Fid//Ob//sid/XMjkzNTY0NzI3Ng==/v.swf')
    embed.setAttribute('quality', 'high')
    embed.setAttribute('width', 480)
    embed.setAttribute('height', 440)
    embed.setAttribute('align', 'middle')
    embed.setAttribute('allowFullScreen', 'true')
    embed.setAttribute('allowScriptAccess', 'always')
    embed.setAttribute('mode', 'transparent')
    embed.setAttribute('type', 'application/x-shockwave-flash')
    div.appendChild(embed)
  }

  render() {
    const { router } = this.props
    return (
      <Layout>

        <Header style={{background: '#fff'}}>
          <div className={'header-bar'}>
            <Button  size={'large'} onClick={ e => router.push('/home')}>首页</Button>
            <Button  size={'large'} onClick={ e => router.push('/foreign')}>国外专家</Button>
            <Button type="primary"  size={'large'}>关于我们</Button>
          </div>
        </Header>

        <Content>
          <div className="video" style={{fontSize: '16px', width: '200px', clear: 'both'}}>
            <h3>视频播放</h3>
          </div>

        </Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
