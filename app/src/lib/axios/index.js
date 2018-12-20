// 统一网络库
import axios from "axios";
import qs from "qs";
import config from "@/conf";

const { baseURL = "" } = config;

function throwHttpError(message, code) {
  const error = new Error(message);
  error.name = "HttpError";
  error.code = code;

  throw error;
}

const createOpt = url => ({
  baseURL: url,
  headers: {
    "x-toekn": "",
    "Content-Type": "application/json;charset=utf-8"
  },
  transformRequest(data, header) {
    const contentType = header["Content-Type"];
    if (contentType === "multipart/form-data") {
      return data;
    }
    const isForm = contentType === "application/x-www-form-urlencoded";

    return isForm ? qs.stringify(data) : JSON.stringify(data);
  }
});

// 提供两种实例
let instanceForJava = axios.create(createOpt(baseURL));
[instanceForJava].forEach(ele => {
  ele.interceptors.response.use(
    response => {
      const result = response.data;
      if (!result) {
        throwHttpError("请求异常！");
      }

      if (typeof result !== "object") {
        throwHttpError("返回数据格式异常！");
      }

      if (result.code !== 0) {
        throwHttpError(result.error || "请求异常！", result.code);
      }

      return result.data;
    },
    error => {
      if (error.response) {
        const { data } = error.response;
        if (data && data.error) {
          throwHttpError(data.error);
        }
        throwHttpError(`请求异常：${error.response.statusText}`);
      }

      if (error.request) {
        throwHttpError("请求异常：无返回结果");
      }
      throwHttpError(error.message);
    }
  );
});

export default instanceForJava;
