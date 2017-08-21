import React, { Component } from 'react'
import { Layout, Button } from 'antd'

const { Header, Content, Footer } = Layout

export default class Foreign extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { router } = this.props
    return (
      <Layout>

        <Header style={{background: '#fff'}}>
          <div className={'header-bar'}>
            <Button  size={'large'} onClick={ e => router.push('/home')}>首页</Button>
            <Button type="primary" size={'large'}>国外专家</Button>
            <Button  size={'large'} onClick={ e => router.push('/about')}>关于我们</Button>
          </div>
        </Header>

        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
