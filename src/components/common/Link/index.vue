<template>
  <a :href="href" :style="textStyle">{{ text }}</a>
</template>

<script>
export default {
  name: 'shr-link',
  props: {
    text: {
      type: String,
      default: '默认链接'
    },
    href: {
      type: String,
      default: 'https://www.baidu.com'
    },
    size: {
      type: [Number, String],
      default: 12
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
<style lang="less"></style>
