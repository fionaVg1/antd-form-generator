<template>
  <a-dropdown :trigger="['click']">
    <a-button @click="e => e.preventDefault()"
      >{{ placement }}<a-icon type="down"
    /></a-button>
    <a-menu slot="overlay">
      <a-menu-item
        v-for="item in dropArr"
        :key="item.index"
        @click="selectDropItem"
      >
        <a target="_blank" rel="noopener noreferrer">{{ item }}</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  props: {
    placement: {
      type: String,
      default: 'xialk'
    },
    dropArr: {
      type: Array
    }
  },
  methods: {
    selectDropItem: function(item) {
      console.log(item);
    }
  }
};
</script>

<style></style>
