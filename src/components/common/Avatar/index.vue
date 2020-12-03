<template>
  <div :class="['shr-avatar', className]" :style="sizeStyle">
    <img :src="src" alt="请填写图像路径" srcset="" />
  </div>
</template>

<script>
export default {
  name: 'shr-avatar',
  props: {
    shape: {
      type: String,
      default: 'square' // circle ， square
    },
    size: {
      type: [Number, String],
      default: 40
    },
    src: {
      type: String
    }
  },
  computed: {
    sizeStyle() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
        // lineHeight: `${this.size}px`
      };
    },
    className() {
      return `shr-avatar-${this.shape}`;
    }
  }
};
</script>

<style lang="less" scoped>
.shr-avatar {
  overflow: hidden;
}
.shr-avatar img {
  width: 100%;
  height: 100%;
}
.shr-avatar-square {
  border-radius: 4px;
}
.shr-avatar-circle {
  border-radius: 50%;
}
</style>
