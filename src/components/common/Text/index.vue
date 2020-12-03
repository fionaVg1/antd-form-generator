<template>
  <div class="shr-text" :style="textStyle">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'shr-text',
  props: {
    text: {
      type: String,
      default: '默认文本'
    },
    size: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String
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
<style lang="less"></style>
