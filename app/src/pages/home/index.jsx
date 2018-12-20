import React, { PureComponent } from "react";
import fetch from "@lib/axios";
//import API from "@common/api";
import "./style.less";

export default class home extends PureComponent {
  componentDidMount() {
    fetch.post("/test/info", { apiName: "test" });
    fetch.post("/api/test/info", { apiName: "test" });
    fetch.post("https://baidu.com/api/test/info", { apiName: "test" });
  }

  render() {
    return <div className="container">hello world</div>;
  }
}
