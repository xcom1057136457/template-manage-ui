// 下载文件
export function downLoadByUrl(url: string) {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 获取两个日期之间的所有月份
function getYearAndMonth(start: any, end: any) {
  const result = []
  const newResult = []
  const starts = start.split('-')
  const ends = end.split('-')
  let staYear = parseInt(starts[0])
  let staMon = parseInt(starts[1])
  const endYear = parseInt(ends[0])
  const endMon = parseInt(ends[1])
  while (staYear <= endYear) {
    if (staYear === endYear) {
      while (staMon < endMon) {
        staMon++
        result.push({ year: staYear, month: staMon })
      }
      staYear++
    } else {
      staMon++
      if (staMon > 12) {
        staMon = 1
        staYear++
      }
      result.push({ year: staYear, month: staMon })
    }
  }

  for (let i = 0; i < result.length; i++) {
    const year = result[i].year
    const month = result[i].month
    //补'0'操作
    // if(monthinit<10){
    //     var month='0'+monthinit;
    // }else{
    //     var month=monthinit+'';
    // }
    const ym = year + '-' + month
    newResult.push(ym)
  }
  newResult.unshift(start)

  return newResult
}

/**
 * 获取两个日期中所有的年份
 * 返回两个时间之间所有的年份
 * 参数示例 （'2021-01-01','2021-01-01'）
 * **/
export const getYearBetween = (start: any, end: any) => {
  const result = []
  let min = new Date(start).getFullYear()
  const max = new Date(end).getFullYear()
  while (min <= max) {
    result.push(min)
    min = Number(min) + 1
  }
  return result
}

// 返回项目路径
export function getNormalPath(p: any) {
  if (p.length === 0 || !p || p === 'undefined') {
    return p
  }
  const res = p.replace('//', '/')
  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1)
  }
  return res
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data: any, id: any, parentId?: any, children?: any) {
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children'
  }

  const childrenListMap: any = {}
  const nodeIds: any = {}
  const tree: any = []

  for (const d of data) {
    const parentId = d[config.parentId]
    if (childrenListMap[parentId] === null) {
      childrenListMap[parentId] = []
    }
    nodeIds[d[config.id]] = d
    childrenListMap[parentId].push(d)
  }

  for (const d of data) {
    const parentId = d[config.parentId]
    if (nodeIds[parentId] === null) {
      tree.push(d)
    }
  }

  for (const t of tree) {
    adaptToChildrenList(t)
  }

  function adaptToChildrenList(o: any) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]]
    }
    if (o[config.childrenList]) {
      for (const c of o[config.childrenList]) {
        adaptToChildrenList(c)
      }
    }
  }
  return tree
}
