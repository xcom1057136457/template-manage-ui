<template>
  <el-dialog
    v-model="dialogVisible"
    title="添加菜单"
    width="40%"
    draggable
    @close="onClose"
  >
    <div class="form-wrapper">
      <el-form
        ref="operateForm"
        label-position="right"
        :label-width="90"
        :model="formParams"
        :rules="rules"
      >
        <el-form-item label="上级菜单:" prop="lastMenu">
          <el-tree-select
            class="w-full"
            v-model="formParams.lastMenu"
            :data="tableData"
            check-strictly
            :props="treeProps"
            placeholder="请选择上级菜单..."
            default-expand-all
            :render-after-expand="false"
          />
        </el-form-item>

        <el-form-item label="菜单类型:" prop="menuType">
          <el-radio-group v-model="formParams.menuType">
            <el-radio
              v-for="item in menuTypeOption"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>

        <el-form-item label="菜单图标:" prop="menuIcon">
          <icon-select v-model:icon="formParams.menuIcon">
            <el-input
              v-model="formParams.menuIcon"
              placeholder="点击选择图标"
              readonly
            >
              <template #prepend>
                <el-icon v-if="formParams.menuIcon">
                  <component :is="formParams.menuIcon" />
                </el-icon>
              </template>
            </el-input>
          </icon-select>
        </el-form-item>

        <el-form-item label="菜单名称:" prop="menuName">
          <el-input
            v-model="formParams.menuName"
            placeholder="请输入菜单名称..."
            clearable
            class="w-full"
          />
        </el-form-item>

        <el-form-item label="显示排序:" prop="sort">
          <el-input-number
            v-model="formParams.sort"
            placeholder="请输入显示排序..."
            controls-position="right"
            style="width: 200px"
          />
        </el-form-item>

        <el-form-item label="路由地址:" prop="url">
          <el-input
            v-model="formParams.url"
            placeholder="请输入路由地址..."
            clearable
          />
        </el-form-item>

        <el-form-item label="显示状态:" prop="show">
          <el-radio-group v-model="formParams.show">
            <el-radio
              v-for="item in showOption"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>

        <el-form-item label="菜单状态:" prop="status">
          <el-radio-group v-model="formParams.status">
            <el-radio
              v-for="item in statusOption"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button text bg @click="dialogVisible = false" :icon="Close"
          >取消</el-button
        >
        <el-button
          type="primary"
          text
          bg
          @click="dialogVisible = false"
          :icon="Check"
        >
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default {
  name: 'OperateDialog'
}
</script>

<script lang="ts" setup>
import { ref, watch, reactive } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import { tableData, menuTypeOption, showOption, statusOption } from '../mock'
import type { FormInstance, FormRules } from 'element-plus'

interface Props {
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false
})

const emits = defineEmits(['update:visible'])

const dialogVisible = ref<boolean>(false)

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

const treeProps = reactive<any>({
  label: 'menuName',
  value: 'id',
  children: 'children'
})

const formParams = reactive<any>({
  lastMenu: '',
  menuType: 0,
  menuIcon: '',
  menuName: '',
  sort: null,
  url: '',
  show: 0,
  status: 0
})

const rules = reactive<FormRules>({
  menuName: [
    { required: true, message: '菜单名称不能为空！', trigger: 'blur' }
  ],
  sort: [{ required: true, message: '显示排序不能为空！', trigger: 'blur' }],
  url: [{ required: true, message: '路由地址不能为空！', trigger: 'blur' }]
})

const operateForm = ref<FormInstance>()

const onClose = () => {
  operateForm.value?.resetFields()
}
</script>

<style lang="scss" scoped></style>
