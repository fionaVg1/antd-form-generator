<template>
  <div class="widget-wrap">
    <a-divider orientation="left">
      图表组件
    </a-divider>
    <div class="charts-wrap">
      <draggable
        v-model="chartsList"
        v-bind="dragOptions"
        class="components-draggable"
        :clone="cloneComponent"
        @end="onEnd"
      >
        <div
          class="charts-item"
          v-for="(item, index) in chartsList"
          :key="`charts_${index}`"
          @click="addComponent(item)"
        >
          <span :class="`tool-icon iconfont ${item.icon}`"></span>
          <span>
            {{ item.name }}
          </span>
        </div>
      </draggable>
    </div>
    <a-divider orientation="left">
      通用组件
    </a-divider>
    <div class="common-wrap">
      <draggable
        v-model="commonComponentsList"
        v-bind="dragOptions"
        class="components-draggable"
        :clone="cloneComponent"
        @end="onEnd"
      >
        <div
          class="charts-item"
          v-for="(item, index) in commonComponentsList"
          :key="`common_${index}`"
          @click="addComponent(item)"
        >
          <span :class="`tool-icon iconfont ${item.icon}`"></span>
          <span>
            {{ item.name }}
          </span>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { chartsComponents, commonComponents } from '@/store/config/echarts';
import mixin from './Mixin';
export default {
  components: { draggable },
  mixins: [mixin],
  data() {
    return {
      chartsList: chartsComponents,
      commonComponentsList: commonComponents
    };
  }
};
</script>

<style lang="less" scoped>
.widget-wrap {
  .charts-wrap,
  .common-wrap {
    padding: 0 10px;
    .components-draggable {
      display: flex;
      flex-wrap: wrap;
      .charts-item {
        display: flex;
        width: 48%;
        line-height: 34px;
        align-items: center;
        padding-left: 10px;
        cursor: move;
        background: #f6f7ff;
        border-radius: 3px;
        margin: 1%;
        border: 1px solid transparent;
        &:hover {
          border: 1px dashed #787be8;
          color: #787be8;
        }
      }
    }
  }
  .tool-icon {
    width: 24px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
