import React, { PureComponent } from "react";
import fetch from "@lib/axios";
import API from "@common/api";
import "./style.less";

export default class home extends PureComponent {
  componentDidMount() {
    fetch.post("//127.0.0.1:8888/test/test", { apiName: "test" });
  }

  render() {
    return <div className="container">hello world</div>;
  }
}
