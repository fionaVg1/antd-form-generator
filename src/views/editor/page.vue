<template>
  <a-layout
    style="border-left: 1px solid #e8e8e8;border-right: 1px solid #e8e8e8;background: #fff"
  >
    <a-layout-content
      :style="{
        background: '#fff',
        padding: '12px',
        margin: 0
      }"
    >
      <draggable
        v-model="dragCardList"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
        tag="div"
        class="drag-content"
        :move="onMove"
      >
        <draggable-item
          v-for="(item, index) in dragCardList"
          :key="item.renderKey"
          :drawing-list="dragCardList"
          :current-item="item"
          :index="index"
          :active-id="index"
          @activeItem="activeFormItem"
          @copyItem="copyCard"
          @deleteItem="deleteCard"
        />
      </draggable>
    </a-layout-content>
  </a-layout>
</template>

<script>
import draggable from 'vuedraggable';
import DraggableItem from './DraggableItem';
import { mapActions } from 'vuex';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
export default {
  components: { draggable, DraggableItem },
  data() {
    return {
      isDragging: false,
      editable: true
    };
  },
  computed: {
    dragCardList: {
      get() {
        console.log('dragCardList:', this.$store.state.editor.dragCardList);
        return this.$store.state.editor.dragCardList;
      },
      set(value) {
        this.CHANGE_POSITION(value);
      }
    },
    // eslint-disable-next-line vue/no-dupe-keys
    dragOptions() {
      return {
        animation: 340,
        group: 'componentsGroup',
        disabled: !this.editable,
        ghostClass: 'ghost'
      };
    }
  },
  methods: {
    ...mapActions('editor', [
      'CHANGE_POSITION',
      'DELETE_DRAG_CARD',
      'COPY_DRAG_CARD',
      'ACTIVE_FORM_ITEM'
    ]),
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    deleteCard(index, parent, id) {
      this.DELETE_DRAG_CARD({ index, parent, id });
    },
    copyCard(id) {
      this.COPY_DRAG_CARD({ id });
    },
    activeChartsItem(e) {
      console.log(e.target);
    },
    activeFormItem(currentItem) {
      this.ACTIVE_FORM_ITEM(currentItem);
    }
  },
  mounted() {
    this.activeFormItem(this.dragCardList[0]);
  }
};
</script>

<style lang="less">
.drag-content {
  position: relative;
  height: 100%;
  .drag-item {
    &:hover {
      & > .toolbar {
        display: initial;
      }
    }
    .toolbar {
      position: absolute;
      right: 8px;
      top: -16px;
      display: none;
    }
    .echarts {
      margin: 30px auto 0;
    }
  }
  .flip-list-move {
    transition: transform 0.2s;
  }
  .drag-row-item {
    position: relative;
    cursor: move;
    box-sizing: border-box;
    border: 1px dashed #ccc;
    border-radius: 3px;
    padding: 0 2px;
    margin-bottom: 15px;
    .drag-wrapper {
      min-height: 80px;
    }
    &.active-drag-item {
      border: 1px dashed #409eff;
    }
    .component-name {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 12px;
      color: #bbb;
      display: inline-block;
      padding: 0 6px;
    }
    .ant-col {
      margin-top: 22px;
    }
  }
  .drag-col-item {
    padding: 0 7.5px;
    .child-component-wrap {
      padding: 12px 10px;
      background-color: #f6f7ff;
      border-radius: 6px;
      margin-bottom: 15px;
    }
  }
}
.ghost {
  position: relative;
  display: block;
  overflow: hidden;
  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 3px;
    background: rgb(89, 89, 223);
    z-index: 2;
  }
}
.components-item.sortable-ghost {
  width: 100%;
  height: 60px;
  background-color: #f6f7ff;
}
</style>
