<template>
  <a-layout-sider
    class="left-panel"
    style="flex: 0 0 auto;width: calc(var(--left-panel-width));max-width: 600px;"
  >
    <a-tabs default-active-key="1" tab-position="top">
      <a-tab-pane key="1" tab="容器">
        <a-layout>
          <Container />
        </a-layout>
      </a-tab-pane>
      <a-tab-pane key="2" tab="组件">
        <a-layout>
          <Widget />
        </a-layout>
      </a-tab-pane>
      <a-tab-pane key="3" tab="模板">
        <a-layout>
          <Preset />
        </a-layout>
      </a-tab-pane>
    </a-tabs>
  </a-layout-sider>
</template>

<script>
import Container from './Container';
import Widget from './Widget';
import Preset from './Preset';

export default {
  components: {
    Container,
    Widget,
    Preset
  }
};
</script>

<style lang="less" scoped>
.left-panel {
  width: calc(var(--left-panel-width));
  background: #fff;
  /deep/ .ant-layout-sider-children {
    overflow: auto;
  }
}
.ant-layout {
  background: #fff;
}
</style>
