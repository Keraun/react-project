import { createBrowserHistory } from "history";
import { baseURL } from "@lib/conf";

export default createBrowserHistory({
  basename: baseURL
});
