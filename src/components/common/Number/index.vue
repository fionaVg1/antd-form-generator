<template>
  <div class="shr-number" :style="textStyle">
    {{ number }}
  </div>
</template>

<script>
export default {
  name: 'shr-text',
  props: {
    number: {
      type: Number,
      default: 100
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: '#388cff'
    },
    weight: {
      type: Boolean
    },
    spacing: {
      type: [Number, String],
      default: 1
    },
    decoration: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    textStyle() {
      return {
        'font-size': `${this.size}px`,
        color: this.color,
        'font-weight': this.weight ? 'bold' : 'normal',
        'letter-spacing': `${this.spacing}px`,
        'text-decoration': this.decoration
      };
    }
  }
};
</script>
<style lang="less" scoped>
.shr-number {
  display: inline-block;
}
</style>
