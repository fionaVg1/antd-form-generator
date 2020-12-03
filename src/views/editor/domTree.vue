<template>
  <a-tree
    draggable
    :tree-data="treeData"
    :default-expanded-keys="['1']"
    @select="onSelect"
    @drop="onDrop"
  >
    <a-icon slot="switcherIcon" type="down" />
  </a-tree>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions('editor', ['CHANGE_POSITION']),
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onDrop(info) {
      if (!info.dropToGap) {
        return;
      }
      const dropKey = info.node.eventKey;
      const dragKey = info.dragNode.eventKey;
      const dropPos = info.node.pos.split('-');
      const dropPosition =
        info.dropPosition - Number(dropPos[dropPos.length - 1]);
      const data = [...this.treeData];

      let dragObj;
      this.loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      if (!info.dropToGap) {
        this.loop(data, dropKey, item => {
          item.children = item.children || [];
          item.children.push(dragObj);
        });
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        this.loop(data, dropKey, item => {
          item.children = item.children || [];
          item.children.unshift(dragObj);
        });
      } else {
        let ar;
        let i;
        this.loop(data, dropKey, (item, index, arr) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }
      this.treeData = data;
    },
    loop(data, key, callback) {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return this.loop(item.children, key, callback);
        }
      });
    }
  },
  computed: {
    ...mapState('editor', ['dragCardList']),
    treeData: {
      get() {
        let arr = [
          {
            title: '容器1',
            key: '1'
          }
        ];
        //组装数据
        this.dragCardList.forEach((item, i) => {
          if (!item.icon) {
            arr[0].children = arr[0].children || [];
            arr[0].children[i] = arr[0].children[i] || {};
            const nameObj = {
              pie: '饼状图',
              scatter: '散点图',
              line: '折线图',
              bar: '柱状图',
              radar: '雷达图'
            };
            arr.forEach(ite => {
              ite.children[i].title = nameObj[item.type];
              arr[0].children[i].key =
                Number(arr[0].key) + '-' + this.dragCardList[i].id;
            });
          }
        });
        return arr;
      },
      set(value) {
        const listChildren = value[0].children;
        const idArray = [];
        const newArray = [];
        listChildren.forEach(v => {
          idArray.push(Number(v.key.substring(v.key.lastIndexOf('-') + 1)));
        });
        let dragCardList = this.$store.state.editor.dragCardList;
        for (let i = 0; i < idArray.length; i++) {
          for (let j = 0; j < dragCardList.length; j++) {
            if (dragCardList[j].id === idArray[i]) {
              newArray.push(dragCardList[j]);
            }
          }
        }
        this.CHANGE_POSITION(newArray);
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped></style>
