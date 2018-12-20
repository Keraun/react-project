import { createBrowserHistory } from "history";
import config from "@/conf";

console.log(config);
export default createBrowserHistory({
  basename: config.baseURL
});
