import Vue from 'vue';
import { deepClone } from '@/utils/index';
const componentChild = {};
/**
 * 将./common文件中的组件全部取出，循环注册
 */
const slotsFiles = require.context('../common', true, /index.vue$/);
const keys = slotsFiles.keys() || [];
keys.forEach(key => {
  const tag = key.replace(/^\.\/(.*)\/\w+\.\w+$/, '$1').toLowerCase();
  const value = slotsFiles(key).default;
  Vue.component(`shr-${tag}`, value);
  componentChild[tag] = value;
});

function vModel(dataObject, defaultValue) {
  dataObject.props.value = defaultValue;

  dataObject.on.input = val => {
    this.$emit('input', val);
  };
}

// eslint-disable-next-line no-unused-vars
function mountSlotFlies(h, confClone, children) {
  const childObjs = componentChild[confClone.configtag];
  if (childObjs) {
    Object.keys(childObjs).forEach(key => {
      const childFunc = childObjs[key];
      if (confClone.__slot__ && confClone.__slot__[key]) {
        children.push(childFunc(h, confClone, key));
      }
    });
  }
}

// eslint-disable-next-line no-unused-vars
function emitEvents(confClone) {
  ['on', 'nativeOn'].forEach(attr => {
    const eventKeyList = Object.keys(confClone[attr] || {});
    eventKeyList.forEach(key => {
      const val = confClone[attr][key];
      if (typeof val === 'string') {
        confClone[attr][key] = event => this.$emit(val, event);
      }
    });
  });
}

function buildDataObject(confClone, dataObject) {
  Object.keys(confClone).forEach(key => {
    const val = confClone[key];
    if (key === '__vModel__') {
      vModel.call(this, dataObject, confClone.configdefaultValue);
    } else if (dataObject[key]) {
      dataObject[key] = { ...dataObject[key], ...val };
    } else {
      dataObject.attrs[key] = val;
    }
  });

  // 清理属性
  //   clearAttrs(dataObject);
}

// eslint-disable-next-line no-unused-vars
function clearAttrs(dataObject) {
  delete dataObject.attrs.config;
  delete dataObject.attrs.slot;
  delete dataObject.attrs.methods;
}

function makeDataObject() {
  return {
    attrs: {},
    props: {},
    nativeOn: {},
    on: {},
    style: {}
  };
}

export default {
  props: {
    conf: {
      type: Object,
      required: true
    }
  },
  render(h) {
    const dataObject = makeDataObject();
    const confClone = deepClone(this.conf);
    const children = [];

    // 如果slots文件夹存在与当前tag同名的文件，则执行文件中的代码
    //mountSlotFlies.call(this, h, confClone, children);

    // 将字符串类型的事件，发送为消息
    // emitEvents.call(this, confClone);
    // 将json表单配置转化为vue render可以识别的 “数据对象（dataObject）”
    buildDataObject.call(this, confClone.config, dataObject);

    return h(this.conf.config.tag, dataObject, children);
  }
};
