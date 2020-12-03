<template>
  <a-layout-sider
    class="right-panel"
    style="flex: 0 0 auto;width: calc(var(--right-panel-width));max-width: 600px;"
  >
    <a-tabs default-active-key="1" tab-position="top">
      <a-tab-pane key="1" tab="组件属性">
        <a-layout>
          <Attribute />
        </a-layout>
      </a-tab-pane>
      <a-tab-pane key="2" tab="表单属性">
        <a-layout>
          <FormAttribute />
        </a-layout>
      </a-tab-pane>
      <a-tab-pane key="3" tab="数据源">
        <a-layout>
          <DataSourse />
        </a-layout>
      </a-tab-pane>
    </a-tabs>
  </a-layout-sider>
</template>

<script>
import Attribute from './attribute';
import FormAttribute from './FormAttribute';
import DataSourse from './dataSource';

export default {
  components: {
    Attribute,
    FormAttribute,
    DataSourse
  }
};
</script>

<style lang="less" scoped>
.right-panel {
  width: calc(var(--right-panel-width));
  background: #fff;
}
.ant-layout {
  background: #fff;
  padding-left: 15px;
}
</style>
