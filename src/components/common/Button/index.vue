<template>
  <a-button :type="type" :disabled="disabled" :size="size" :shape="shape">
    <slot></slot>
  </a-button>
</template>

<script>
export default {
  name: 'shr-button',
  props: {
    type: {
      //按钮类型
      type: String
    },
    textContent: {
      //按钮文本
      type: String,
      default: '默认'
    },
    disabled: {
      //是否禁用按钮,默认为false，启用
      type: Boolean
    },
    size: {
      //按钮大小,不设置即为中等
      type: String
    },
    shape: {
      //按钮形状,不设置即为矩形
      type: String
    }
  }
};
</script>

<style></style>
