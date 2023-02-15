<template>
  <el-dialog
    v-model="dialogVisible"
    title="锁定屏幕"
    width="30%"
    append-to-body
    align-center
    :close-on-click-modal="!isLock"
    :close-on-press-escape="!isLock"
    :show-close="!isLock"
    @close="onReset"
  >
    <div class="lock-wrapper">
      <el-form
        v-if="!isLock"
        ref="lockForm"
        :model="formParams"
        label-position="left"
        :label-width="80"
        status-icon
        hide-required-asterisk
        :rules="rules"
      >
        <el-form-item label="密码:" prop="password">
          <el-input
            type="password"
            v-model="formParams.password"
            placeholder="请输入密码..."
            clearable
            @keyup.enter="onSubmit"
          />
        </el-form-item>

        <el-form-item label="重复密码:" prop="confirmPassWord">
          <el-input
            type="password"
            v-model="formParams.confirmPassWord"
            placeholder="请重新输入密码..."
            clearable
            @keyup.enter="onSubmit"
          />
        </el-form-item>
      </el-form>

      <el-form
        v-else
        ref="lockForm"
        :model="unlockFormParams"
        :rules="unlockRules"
        label-position="left"
        :label-width="80"
        status-icon
        hide-required-asterisk
      >
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="unlockFormParams.password"
            clearable
            placeholder="请输入密码..."
            @keyup.enter="onSubmit"
          />
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button
          v-if="!isLock"
          text
          bg
          :icon="Close"
          @click="lockShow = false"
          >取消</el-button
        >
        <el-button
          type="primary"
          bg
          text
          :icon="isLock ? Unlock : Lock"
          @click="onSubmit"
        >
          {{ isLock ? '解锁' : '锁定' }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default {
  name: 'LockScreen'
}
</script>

<script lang="ts" setup>
import { ref, watch, reactive } from 'vue'
import { Lock, Unlock, Close } from '@element-plus/icons-vue'
import { ElNotification, type FormInstance, type FormRules } from 'element-plus'
import { useCommon } from '@/hooks/common'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global'
import { encrypt, decrypt } from '@/utils/jsencrypt'

interface FormParams {
  password: string
  confirmPassWord: string
}

interface UnlockFormParams {
  password: string
}

interface Props {
  visible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false
})

const emits = defineEmits(['update:visible'])

const { lockShow, password, isLock } = storeToRefs(useGlobalStore())

const { messageConfirm } = useCommon()

const dialogVisible = ref<any>(false)

watch(
  () => props.visible,
  (val, oldVal) => {
    if (val === oldVal) {
      return
    }
    dialogVisible.value = val
  }
)

watch(dialogVisible, (val, oldVal) => {
  if (val === oldVal) {
    return
  }
  emits('update:visible', val)
})

const lockForm = ref<FormInstance>()

const formParams = reactive<FormParams>({
  password: '',
  confirmPassWord: ''
})

const checkConfirmPassWord = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码!'))
  } else if (value !== formParams.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  password: [{ required: true, message: '请输入密码!', trigger: 'blur' }],
  confirmPassWord: [{ validator: checkConfirmPassWord, trigger: 'blur' }]
})

const unlockFormParams = reactive<UnlockFormParams>({
  password: ''
})

const unlockRules = reactive<FormRules>({
  password: [{ required: true, message: '请输入密码!', trigger: 'blur' }]
})

const onSubmit = () => {
  lockForm.value?.validate((valid: boolean) => {
    if (valid) {
      if (!isLock.value) {
        messageConfirm(
          '确认锁定屏幕吗？',
          () => {
            password.value = encrypt(formParams.password)
            isLock.value = true
          },
          () => {
            ElNotification.info({
              message: '取消成功!'
            })
          }
        )
      } else if (unlockFormParams.password === decrypt(password.value)) {
        lockShow.value = false
        isLock.value = false
        password.value = ''
        ElNotification.success({
          message: '解锁成功!'
        })
      } else {
        lockForm.value?.resetFields()
        ElNotification.error({
          message: '密码错误！'
        })
      }
    }
  })
}

const onReset = () => {
  lockForm.value?.resetFields()
}
</script>

<style lang="scss" scoped></style>
