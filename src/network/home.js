import {request} from "./request";

//首页的请求
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
