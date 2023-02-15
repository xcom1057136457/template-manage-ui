import request from '@/utils/request'

const prefix = import.meta.env.VITE_WEB_BASE_URL

const Api = {
  baseCheck: `${prefix}/admin/v1.Check/check`,
  countCheck: `${prefix}/admin/v1.Check/countCheck`,
  unPayUrl: `${prefix}/admin/v1.Check/unPayUrl`,
  refreshActiveCard: `${prefix}/admin/v1.Check/refreshActiveCard`
}

export function baseCheck(data: any) {
  return request({
    url: Api.baseCheck,
    method: 'POST',
    data
  })
}

export function countCheck(data: any) {
  return request({
    url: Api.countCheck,
    method: 'POST',
    data
  })
}

// 查看未交付汇总表
export function unPayUrl(params: any) {
  return request({
    url: Api.unPayUrl,
    method: 'GET',
    params
  })
}

// 修复未激活数据
export function refreshActiveCard(data: any) {
  return request({
    url: Api.refreshActiveCard,
    method: 'POST',
    data
  })
}
