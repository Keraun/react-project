import { createBrowserHistory } from 'history'
import config from '@/conf'

export default createBrowserHistory({
  basename: config.baseURL,
})
