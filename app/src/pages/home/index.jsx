import React from 'react'
import fetch from '@lib/axios'
// import API from "@common/api";
import './style.less'

export default class home extends React.PureComponent {
  componentDidMount() {
    fetch.post('/user/info', {
      apiName: 'userInfo'
    })
    fetch.post('/api/user/info', {
      apiName: 'userInfo'
    })
    fetch.post('https://baidu.com/api/user/info', { apiName: 'userInfo' })
  }

  render() {
    return <div className="container">hello world</div>
  }
}
