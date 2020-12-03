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
import Header from './header';
import LeftSider from './leftSider';
import RightSider from './rightSider';
import Page from './page';
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
