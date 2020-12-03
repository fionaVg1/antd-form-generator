import { deepClone } from '@/utils/index';
import { mapActions, mapState } from 'vuex';
let tempActiveData;
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState('editor', ['dragCardList']),
    globalId: {
      get() {
        return this.$store.state.editor.globalCount;
      },
      set(value) {
        this.UPDATE_GLOBAL_ID(value);
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: { name: 'componentsGroup', pull: 'clone', put: false },
        disabled: false,
        sort: false
      };
    }
  },
  methods: {
    ...mapActions('editor', [
      'UPDATE_GLOBAL_ID',
      'ADD_COMPONENT',
      'ACTIVE_FORM_ITEM'
    ]),
    addComponent(item) {
      const clone = this.cloneComponent(item);
      this.ADD_COMPONENT(clone);
      this.ACTIVE_FORM_ITEM(clone);
    },
    // 在拖拽中组装数据
    cloneComponent(origin) {
      const clone = deepClone(origin);
      const id = this.globalId++;
      clone.id = id;
      clone.renderKey = +new Date(); // 改变renderKey后可以实现强制更新组件
      const config = clone.config;
      if (clone.layout === 'colFormItem') {
        config.componentName = `col${id}`;
      } else if (clone.layout === 'rowFormItem') {
        config.componentName = `row${id}`;
        clone.formId = id;
      }
      tempActiveData = clone;
      return clone;
    },
    onEnd(obj) {
      if (obj.from !== obj.to) {
        this.ACTIVE_FORM_ITEM(tempActiveData);
      }
    }
  }
};
