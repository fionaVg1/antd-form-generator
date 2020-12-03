<template>
  <a-form
    class="componentAttribute"
    :form="form"
    v-show="showFiled"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
    <a-form-item label="表单栅格">
      <a-slider
        :defaultValue="activeData.config.span"
        :min="1"
        :max="24"
        @change="spanChange"
      />
    </a-form-item>
    <a-form-item label="布局模式">
      <a-radio-group :default-value="activeData.type" v-model="activeData.type">
        <a-radio-button value="default">
          default
        </a-radio-button>
        <a-radio-button value="flex">
          flex
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item v-show="activeData.type === 'flex'" label="水平排列">
      <a-select
        :default-value="activeData.justify"
        v-model="activeData.justify"
      >
        <a-select-option
          v-for="(item, index) in justifyOptions"
          :value="item.value"
          :key="index"
        >
          {{ item.label }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item v-show="activeData.type === 'flex'" label="垂直排列">
      <a-radio-group
        :default-value="activeData.align"
        v-model="activeData.align"
        size="small"
      >
        <a-radio-button value="top">
          top
        </a-radio-button>
        <a-radio-button value="middle">
          middle
        </a-radio-button>
        <a-radio-button value="bottom">
          bottom
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item v-for="(item, key) in config" :key="key" :label="key">
      <a-input
        v-if="typeof item === 'number'"
        v-model.number="activeData.config[key]"
      />
    </a-form-item>
  </a-form>
</template>

<script>
import { layoutComponents } from '@/store/config/component';
import { deepClone } from '@/utils/index';
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 17 }
      },
      justifyOptions: [
        {
          label: 'start',
          value: 'start'
        },
        {
          label: 'end',
          value: 'end'
        },
        {
          label: 'center',
          value: 'center'
        },
        {
          label: 'space-around',
          value: 'space-around'
        },
        {
          label: 'space-between',
          value: 'space-between'
        }
      ]
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'componentAttribute' });
  },
  methods: {
    handleSubmit() {
      console.log('handle...');
    },
    spanChange(val) {
      this.activeData.config.span = val;
    }
  },
  computed: {
    activeData: {
      get() {
        let activeData = this.$store.state.editor.activeData;
        if (!activeData) {
          activeData = layoutComponents[0];
        }
        return activeData;
      }
    },
    config: {
      get() {
        let config = deepClone(this.activeData.config);
        return config;
      }
    },
    showFiled: {
      get() {
        return !!this.$store.state.editor.dragCardList.length;
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
