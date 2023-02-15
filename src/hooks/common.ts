import { ElMessageBox } from 'element-plus'

export const useCommon = () => {
  const messageConfirm = (
    msg: string,
    cb?: Function,
    erCb?: Function,
    confirmText = '确认',
    cancelText = '取消'
  ) => {
    ElMessageBox.confirm(msg, '系统提示', {
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      type: 'warning'
    })
      .then(() => {
        if (cb) {
          cb()
        }
      })
      .catch(() => {
        if (erCb) {
          erCb()
        }
      })
  }

  return {
    messageConfirm
  }
}
