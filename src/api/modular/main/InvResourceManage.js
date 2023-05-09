import { axios } from '@/utils/request'

/**
 * 查询资源
 *
 * @author OpenSvc
 */
export function InvResourcePage (parameter) {
  return axios({
    url: '/InvResource/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 资源列表
 *
 * @author OpenSvc
 */
export function InvResourceList (parameter) {
  return axios({
    url: '/InvResource/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加资源
 *
 * @author OpenSvc
 */
export function InvResourceAdd (parameter) {
  return axios({
    url: '/InvResource/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑资源
 *
 * @author OpenSvc
 */
export function InvResourceEdit (parameter) {
  return axios({
    url: '/InvResource/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除资源
 *
 * @author OpenSvc
 */
export function InvResourceDelete (parameter) {
  return axios({
    url: '/InvResource/delete',
    method: 'post',
    data: parameter
  })
}
