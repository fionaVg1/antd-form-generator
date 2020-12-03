<template>
  <a-form class="formAttribute" :form="form" v-bind="formItemLayout">
    <a-form-item label="表单名">
      <a-input v-model="formConfig.name" />
    </a-form-item>
    <a-form-item label="标签对齐">
      <a-radio-group
        :default-value="formConfig.labelPosition"
        v-model="formConfig.labelPosition"
        size="small"
      >
        <a-radio-button value="left">
          左对齐
        </a-radio-button>
        <a-radio-button value="right">
          右对齐
        </a-radio-button>
        <a-radio-button value="top">
          顶部对齐
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
  </a-form>
</template>
<script>
import { mapActions, mapState } from 'vuex';
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
  created() {
    this.INIT_FORM_ATTRIBUTE();
  },
  computed: {
    ...mapState('editor', ['formConfig'])
  },
  methods: {
    ...mapActions('editor', ['INIT_FORM_ATTRIBUTE'])
  }
};
</script>
