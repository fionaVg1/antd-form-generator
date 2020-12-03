<template>
  <div class="shr-progress">
    <a-progress
      :percent="percent"
      :type="type"
      :show-info="showInfo"
      :status="status"
      :stroke-color="strokeColor"
    />
  </div>
</template>

<script>
export default {
  name: 'shr-progress',
  props: {
    percent: {
      type: Number
    },
    type: {
      type: String,
      default: 'line'
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    status: {
      type: String // success exception normal active
    },
    strokeColor: {
      type: [String, Object]
    }
  }
};
</script>

<style lang="less" scoped></style>
