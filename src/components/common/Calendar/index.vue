<template>
  <div
    :style="{
      minWidth: '200px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px'
    }"
  >
    <a-config-provider :locale="this.componentLocale">
      <a-calendar :fullscreen="false" @panelChange="onPanelChange">
      </a-calendar>
    </a-config-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import enUS from 'ant-design-vue/es/locale-provider/en_US';
export default {
  name: 'shr-calendar',
  data: function() {
    return {
      locale: 'zh_CN'
    };
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    }
  },
  computed: {
    componentLocale: function() {
      return this.locale == 'zh_CN' ? zhCN : enUS;
    }
  }
};
</script>

<style>
.ant-fullcalendar-header {
  text-align: center;
}
</style>
