<template>
  <a-form class="formAttribute" :form="form" v-bind="formItemLayout">
    <a-form-item label="隐藏必选">
      <a-switch v-model="formConfig.hideRequiredMark" />
    </a-form-item>
    <a-form-item label="标签对齐">
      <a-radio-group
        :default-value="formConfig.labelAlign"
        v-model="formConfig.labelAlign"
        size="small"
      >
        <a-radio-button value="left">
          左对齐
        </a-radio-button>
        <a-radio-button value="right">
          右对齐
        </a-radio-button>       
      </a-radio-group>
    </a-form-item>
    <a-form-item label="表单布局">
      <a-radio-group
        :default-value="formConfig.layout"
        v-model="formConfig.layout"
        size="small"
      >
        <a-radio-button value="horizontal">
          水平
        </a-radio-button>
        <a-radio-button value="vertical">
          垂直
        </a-radio-button> 
         <a-radio-button value="inline">
          行内
        </a-radio-button>     
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 17 }
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'formAttribute' });
  }, 
  computed: {
    ...mapState('editor', ['formConfig'])
  }, 
};
</script>
