<template>
  <div>
    <a-tree
      :show-line="false"
      :show-icon="false"
      :default-expanded-keys="['0-0-0']"
      @select="onSelect"
      :tree-data="treeData"
    >
    </a-tree>
  </div>
</template>

<script>
export default {
  props: {
    treeData: {
      type: Array
    }
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    }
  }
};
</script>

<style></style>
