import React, { PureComponent } from 'react'
import './style.less'

export default class Layout extends PureComponent {
  render() {
    return <div className="app-layout">{this.props.children}</div>
  }
}
