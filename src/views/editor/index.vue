<template>
  <a-layout id="shr-editor">
    <Header />
    <a-layout>
      <LeftSider />
      <Page />
      <RightSider />
      <form-drawer />
    </a-layout>
  </a-layout>
</template>
<script>
import '../../css/editor/editor.less';
import Header from './Header';
import LeftSider from './LeftSider';
import RightSider from './RightSider';
import Page from './Page';
import FormDrawer from './FormDrawer';

export default {
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    LeftSider,
    RightSider,
    Page,
    FormDrawer
  }
};
</script>

<style lang="less" scoped="true">
#shr-editor {
  height: 100%;
}
</style>
