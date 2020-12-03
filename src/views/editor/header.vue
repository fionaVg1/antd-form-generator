<template>
  <a-layout-header class="header">
    <div class="nav-bar">
      <div class="nav-left">
        <div class="logo"></div>
      </div>
      <div class="nav-middle">
        <div class="tool-icon iconfont icon-arrow-go-back-line"></div>
        <div class="tool-icon iconfont icon-arrow-go-forward-line"></div>
        <div class="tool-icon iconfont icon-preview"></div>
        <div
          class="tool-icon iconfont icon-fullscreen"
          @click="fullScreen"
        ></div>
        <div
          class="tool-icon iconfont icon-run"
          title="预览"
          @click="previewCard"
        ></div>
        <a-popconfirm
          title="确定要清空所有组件吗？"
          ok-text="yes"
          cancel-text="No"
          @confirm="confirmEmptyPanel"
        >
          <div class="tool-icon iconfont icon-shanchu" title="清空"></div>
        </a-popconfirm>
      </div>
      <div class="nav-right">
        <div class="tool-icon iconfont icon-phone"></div>
        <div class="tool-icon iconfont icon-pc"></div>
        <div class="tool-btn">
          <a-button type="primary" icon="save">
            保存
          </a-button>
          <a-button type="primary" icon="deployment-unit">
            发布
          </a-button>
        </div>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions('editor', ['EMPTYPANEL', 'PREVIEWFORM']),
    fullScreen() {
      this.launchFullScreen(document);
    },
    previewCard() {
      this.PREVIEWFORM(true);
    },
    // Toggle fullscreen
    launchFullScreen(document) {
      if (document.documentElement.requestFullScreen) {
        if (document.FullScreenElement) document.exitFullScreen();
        else document.documentElement.requestFullScreen();
        //mozilla
      } else if (document.documentElement.mozRequestFullScreen) {
        if (document.mozFullScreenElement) document.mozCancelFullScreen();
        else document.documentElement.mozRequestFullScreen();
        //webkit
      } else if (document.documentElement.webkitRequestFullScreen) {
        if (document.webkitFullscreenElement) document.webkitExitFullscreen();
        else document.documentElement.webkitRequestFullScreen();
        //ie
      } else if (document.documentElement.msRequestFullscreen) {
        if (document.msFullScreenElement) document.msExitFullscreen();
        else document.documentElement.msRequestFullscreen();
      }
    },
    confirmEmptyPanel() {
      this.EMPTYPANEL();
    }
  }
};
</script>

<style lang="less" scoped>
#shr-editor .header {
  background: #fff;
  border-bottom: 1px solid #e8e8e8;
}
#shr-editor .logo {
  width: 200px;
  height: 60px;
  background: url(../../assets/logo.gif) no-repeat center;
  margin: 2px 28px 2px 0;
}
.nav-bar {
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  .nav-left {
    height: inherit;
  }
  .nav-middle {
    height: inherit;
    display: flex;
    align-items: center;
  }
  .nav-right {
    height: inherit;
    display: flex;
    align-items: center;
  }
}
.tool-icon {
  font-size: 24px;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background: rgb(240, 242, 245);
  }
}
.tool-btn {
  width: 200px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
