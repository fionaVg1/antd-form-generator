<script>
import draggable from 'vuedraggable';
import render from '@/components/render/render';
const components = {
  itemBtns(h, currentItem, index, parent) {
    const { copyItem, deleteItem } = this.$listeners;
    return (
      <div class="toolbar">
        <a-space align="center">
          <a-button
            type="primary"
            icon="copy"
            shape="circle"
            title="复制"
            onClick={event => {
              copyItem(currentItem.id);
              event.stopPropagation();
            }}
          />
          <a-button
            type="primary"
            icon="delete"
            shape="circle"
            title="删除"
            onClick={event => {
              deleteItem(index, parent, currentItem.id);
              event.stopPropagation();
            }}
          />
        </a-space>
      </div>
    );
  }
};
const layouts = {
  colFormItem(h, currentItem) {
    const { activeItem } = this.$listeners;
    const config = currentItem.config;
    const className = 'drag-col-item active-drag-item drag-item';
    return (
      <a-col
        span={config.span}
        class={className}
        nativeOnClick={event => {
          activeItem(currentItem);
          event.stopPropagation();
        }}
      >
        {components.itemBtns.apply(this, arguments)}
        <div class="child-component-wrap">
          <render conf={currentItem} />
        </div>
      </a-col>
    );
  },
  rowFormItem(h, currentItem) {
    const { activeItem } = this.$listeners;
    const config = currentItem.config;
    const className = 'drag-row-item active-drag-item drag-item';
    let child = renderChildren.apply(this, arguments);
    if (currentItem.type === 'flex') {
      child = (
        <a-row
          type={currentItem.type}
          justify={currentItem.justify}
          align={currentItem.align}
        >
          {child}
        </a-row>
      );
    }
    return (
      <a-col span={config.span}>
        <a-row
          gutter={config.gutter}
          class={className}
          nativeOnClick={event => {
            activeItem(currentItem);
            event.stopPropagation();
          }}
        >
          {components.itemBtns.apply(this, arguments)}
          <span class="component-name">{config.componentName}</span>
          <draggable
            list={config.children || []}
            animation={340}
            group="componentsGroup"
            class="drag-wrapper"
            data-value={currentItem.config.id}
          >
            {child}
          </draggable>
        </a-row>
      </a-col>
    );
  },
  chart(h, currentItem) {
    return (
      <a-col span="12" class="drawing-item">
        <div class="drag-item">
          {components.itemBtns.apply(this, arguments)}
          <v-chart options={currentItem.e_config} />
        </div>
      </a-col>
    );
  }
};

function renderChildren(h, currentItem) {
  const config = currentItem.config;
  if (!Array.isArray(config.children)) return null;
  return config.children.map((el, i) => {
    const layout = layouts[el.layout];
    if (layout) {
      return layout.call(this, h, el, i, config.children);
    }
    return layoutIsNotFound.call(this);
  });
}

function layoutIsNotFound() {
  throw new Error(`没有与${this.currentItem.layout}匹配的layout`);
}

export default {
  components: {
    draggable
  },
  props: ['currentItem', 'dragCardList', 'activeId'],
  render(h) {
    const layout = layouts[this.currentItem.layout];
    if (layout) {
      return layout.call(
        this,
        h,
        this.currentItem,
        this.index,
        this.dragCardList
      );
    }
    return layoutIsNotFound.call(this);
  }
};
</script>
