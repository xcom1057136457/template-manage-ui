<template>
  <div class="login-wrapper relative h-full">
    <div
      class="login-form-wrapper absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-lg bg-el-bg-color shadow-el-box-shadow"
    >
      <div class="relative w-[450px] overflow-hidden bg-el-fill-color-light">
        <img
          src="https://hooray.gitee.io/fantastic-admin-example/assets/login-banner-a565fac8.png"
          alt=""
          class="absolute top-1/2 w-full -translate-y-1/2"
        />
      </div>
      <div class="login-form box-border w-[500px] py-24 px-12">
        <div
          class="login-title mx-auto mb-8 mt-0 flex items-center justify-center text-[1.3em] font-bold text-el-text-color-primary"
        >
          欢迎来到财务管理系统！
          <i-twemoji-bright-button />
        </div>
        <el-form
          size="large"
          :rules="loginRules"
          ref="LoginForm"
          :model="loginParams"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginParams.username"
              placeholder="用户名"
              :prefix-icon="User"
              clearable
              @keyup.enter="onLogin"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              show-password
              v-model="loginParams.password"
              placeholder="密码"
              :prefix-icon="Lock"
              clearable
              @keyup.enter="onLogin"
            />
          </el-form-item>

          <el-form-item prop="rememberMe">
            <el-checkbox v-model="loginParams.rememberMe">记住账号</el-checkbox>
          </el-form-item>
        </el-form>

        <el-button
          type="primary"
          size="large"
          style="width: 100%"
          :loading="loginLoading"
          @click="onLogin"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginPage'
}
</script>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import type { FormRules, FormInstance } from 'element-plus'
import Cookies from 'js-cookie'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ElMessage } from 'element-plus'

const { login } = useUserStore()

const router = useRouter()

const route = useRoute()
const redirectUrl = ref<any>()
watch(
  route,
  (route) => {
    redirectUrl.value = route.query && route.query.redirect
  },
  { immediate: true }
)

const loginParams = reactive<any>({
  username: '',
  password: '',
  rememberMe: false
})

const loginRules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名!', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码!', trigger: 'blur' }]
})

const LoginForm = ref<FormInstance>()
const loginLoading = ref<boolean>(false)

// 登录
const onLogin = () => {
  LoginForm.value?.validate(async (isValid) => {
    if (isValid) {
      loginLoading.value = true
      if (loginParams.rememberMe) {
        Cookies.set('username', loginParams.username, { expires: 30 })
        Cookies.set('password', loginParams.password, { expires: 30 })
        Cookies.set('rememberMe', loginParams.rememberMe, { expires: 30 })
      } else {
        Cookies.remove('username')
        Cookies.remove('password')
        Cookies.remove('rememberMe')
      }
      try {
        await login(loginParams)
        router.push({ path: redirectUrl.value || '/' })
        ElMessage.success('登陆成功!')
        loginLoading.value = false
      } catch (e) {
        loginLoading.value = false
      }
    }
  })
}

// 记住账号
const getAccountFromCookie = () => {
  const username = Cookies.get('username')
  const password = Cookies.get('password')
  const rememberMe = Boolean(Cookies.get('rememberMe'))
  loginParams.username = username
  loginParams.password = password
  loginParams.rememberMe = rememberMe
}

onMounted(() => {
  getAccountFromCookie()
})
</script>

<style lang="scss" scoped>
.login-wrapper {
  background: radial-gradient(
    circle at center,
    var(--el-fill-color-lighter),
    var(--el-bg-color-page)
  );
}
</style>
