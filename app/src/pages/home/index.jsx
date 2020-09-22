import React from 'react'
import fetch from '@lib/axios'
import { connect } from 'react-redux'
// import { USE_TEXT_THUNK, USER_FETCH_ACTION } from './reducer'
// import API from "@common/api"
import './style.less'

class home extends React.PureComponent {
  componentDidMount() {
    // this.props.dispatch(USE_TEXT_THUNK())
    // this.props.dispatch(USER_FETCH_ACTION({ a: '1' }))

    fetch.post('/user/info', {
      apiName: 'userInfo',
    })
    fetch.post('/api/user/info', {
      apiName: 'userInfo',
    })
    fetch.post('https://baidu.com/api/user/info', { apiName: 'userInfo' })
  }

  render() {
    return <div className="container">hello world</div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.home.user,
  }
}

export default connect(mapStateToProps)(home)
