<template>
  <div class="container-wrap">
    <draggable
      v-model="containerList"
      v-bind="dragOptions"
      tag="div"
      class="components-draggable"
      :clone="cloneComponent"
      @end="onEnd"
    >
      <div
        class="container-item"
        v-for="(item, index) in containerList"
        :key="`container_${index}`"
        @click="addComponent(item)"
      >
        <span :class="`tool-icon iconfont ${item.icon}`"></span>
        <span>
          {{ item.name }}
        </span>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import { layoutComponents } from '@/store/config/component';
import mixin from './Mixin';
export default {
  components: { draggable },
  mixins: [mixin],
  data() {
    return {
      containerList: layoutComponents,
      tempActiveData: null
    };
  }
};
</script>

<style lang="less" scoped>
.container-wrap {
  padding: 0 10px;
  .components-draggable {
    display: flex;
    flex-wrap: wrap;
    .container-item {
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
  .tool-icon {
    width: 24px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
