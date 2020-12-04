/* eslint-disable max-len */
import ruleTrigger from './ruleTrigger';

let confGlobal;
let someSpanIsNot24;

export function dialogWrapper(str) {
  return `<a-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">
    ${str}   
  </a-dialog>`;
}

export function vueTemplate(str) {
  return `<template>
    <div>
      ${str}
    </div>
  </template>`;
}

export function vueScript(str) {
  return `<script>
    ${str}
  </script>`;
}

export function cssStyle(cssStr) {
  return `<style>
    ${cssStr}
  </style>`;
}

function buildFormTemplate(scheme, child) {
  let labelPosition = '';
  if (scheme.labelPosition !== 'right') {
    labelPosition = `label-position="${scheme.labelPosition}"`;
  }
  const disabled = scheme.disabled ? `:disabled="${scheme.disabled}"` : '';
  let str = `<a-form ref="${scheme.formRef}" :model="${scheme.formModel}" :rules="${scheme.formRules}" size="${scheme.size}" ${disabled} label-width="${scheme.labelWidth}px" ${labelPosition}>
      ${child}      
    </a-form>`;
  if (someSpanIsNot24) {
    str = `<a-row :gutter="${scheme.gutter}">
        ${str}
      </a-row>`;
  }
  return str;
}

// span不为24的用a-col包裹
function colWrapper(scheme, str) {
  if (someSpanIsNot24 || scheme.config.span !== 24) {
    return `<a-col :span="${scheme.config.span}">
      ${str}
    </a-col>`;
  }
  return str;
}

const layouts = {
  colFormItem(scheme) {
    const config = scheme.config;
    let labelWidth = '';
    let label = `label="${config.label}"`;
    if (config.labelWidth && config.labelWidth !== confGlobal.labelWidth) {
      labelWidth = `label-width="${config.labelWidth}px"`;
    }
    if (config.showLabel === false) {
      labelWidth = 'label-width="0"';
      label = '';
    }
    const required =
      !ruleTrigger[config.tag] && config.required ? 'required' : '';
    const tagDom = tags[config.tag] ? tags[config.tag](scheme) : null;
    let str = `<a-form-item ${labelWidth} ${label} prop="${scheme.__vModel__}" ${required}>
        ${tagDom}
      </a-form-item>`;
    str = colWrapper(scheme, str);
    return str;
  },
  rowFormItem(scheme) {
    const config = scheme.config;
    const type = scheme.type === 'default' ? '' : `type="${scheme.type}"`;
    const justify =
      scheme.type === 'default' ? '' : `justify="${scheme.justify}"`;
    const align = scheme.type === 'default' ? '' : `align="${scheme.align}"`;
    const gutter = scheme.gutter ? `:gutter="${scheme.gutter}"` : '';
    const children = config.children.map(el => layouts[el.layout](el));
    let str = `<a-row ${type} ${justify} ${align} ${gutter}>
      ${children.join('\n')}
    </a-row>`;
    str = colWrapper(scheme, str);
    return str;
  }
};

const tags = {
  'shr-avatar': el => {
    const { tag } = attrBuilder(el);
    const src = el.config.src ? `src="${el.config.src}"` : '';
    const shape = el.config.shape ? `shape="${el.config.shape}"` : '';
    const size = el.config.size ? `:size=${el.config.size}` : '';
    return `<${tag} ${src} ${shape} ${size}> </${tag}>`;
  },
  'shr-button': el => {
    const { tag } = attrBuilder(el);
    const type = el.config.type ? `type="${el.config.type}"` : '';
    const size = el.config.size ? `size="${el.config.size}"` : '';
    return `<${tag} ${type} ${size}></${tag}>`;
  },
  'shr-text': el => {
    const { tag } = attrBuilder(el);
    const size = el.config.size ? `:size="${el.config.size}"`:'';
    const color = el.config.color ? `:color="${el.config.color}"`:'';
    const weight = el.config.weight ? `:weight="${el.config.weight}"`:'';
    const spacing = el.config.spacing  ? `:spacing="${el.config.spacing}"`:'';
    const decoration = el.config.decoration ? `:decoration="${el.config.decoration}"`:'';
    const text = el.config.text ? `:text="${el.config.text}"`:'';
    return `<${tag} ${size} ${color} ${weight} ${spacing} ${decoration} ${text}></${tag}>`;
  },
  'el-button': el => {
    const { tag, disabled } = attrBuilder(el);
    const type = el.type ? `type="${el.type}"` : '';
    const icon = el.icon ? `icon="${el.icon}"` : '';
    const round = el.round ? 'round' : '';
    const size = el.size ? `size="${el.size}"` : '';
    const plain = el.plain ? 'plain' : '';
    const circle = el.circle ? 'circle' : '';
    let child = buildElButtonChild(el);

    if (child) child = `\n${child}\n`; // 换行
    return `<${tag} ${type} ${icon} ${round} ${size} ${plain} ${disabled} ${circle}>${child}</${tag}>`;
  },
  'el-input': el => {
    const {
      tag,
      disabled,
      vModel,
      clearable,
      placeholder,
      width
    } = attrBuilder(el);
    const maxlength = el.maxlength ? `:maxlength="${el.maxlength}"` : '';
    const showWordLimit = el['show-word-limit'] ? 'show-word-limit' : '';
    const readonly = el.readonly ? 'readonly' : '';
    const prefixIcon = el['prefix-icon']
      ? `prefix-icon='${el['prefix-icon']}'`
      : '';
    const suffixIcon = el['suffix-icon']
      ? `suffix-icon='${el['suffix-icon']}'`
      : '';
    const showPassword = el['show-password'] ? 'show-password' : '';
    const type = el.type ? `type="${el.type}"` : '';
    const autosize =
      el.autosize && el.autosize.minRows
        ? `:autosize="{minRows: ${el.autosize.minRows}, maxRows: ${el.autosize.maxRows}}"`
        : '';
    let child = buildElInputChild(el);

    if (child) child = `\n${child}\n`; // 换行
    return `<${tag} ${vModel} ${type} ${placeholder} ${maxlength} ${showWordLimit} ${readonly} ${disabled} ${clearable} ${prefixIcon} ${suffixIcon} ${showPassword} ${autosize} ${width}>${child}</${tag}>`;
  },
  tinymce: el => {
    const { tag, vModel, placeholder } = attrBuilder(el);
    const height = el.height ? `:height="${el.height}"` : '';
    const branding = el.branding ? `:branding="${el.branding}"` : '';
    return `<${tag} ${vModel} ${placeholder} ${height} ${branding}></${tag}>`;
  }
};

function attrBuilder(el) {
  return {
    tag: el.config.tag,
    vModel: `v-model="${confGlobal.formModel}.${el.__vModel__}"`,
    clearable: el.clearable ? 'clearable' : '',
    placeholder: el.placeholder ? `placeholder="${el.placeholder}"` : '',
    width: el.style && el.style.width ? ':style="{width: \'100%\'}"' : '',
    disabled: el.disabled ? ":disabled='true'" : ''
  };
}

// el-button 子级
function buildElButtonChild(scheme) {
  const children = [];
  const slot = scheme.__slot__ || {};
  if (slot.default) {
    children.push(slot.default);
  }
  return children.join('\n');
}

// el-input 子级
function buildElInputChild(scheme) {
  const children = [];
  const slot = scheme.__slot__;
  if (slot && slot.prepend) {
    children.push(`<template slot="prepend">${slot.prepend}</template>`);
  }
  if (slot && slot.append) {
    children.push(`<template slot="append">${slot.append}</template>`);
  }
  return children.join('\n');
}
/**
 * 组装html代码。【入口函数】
 * @param {Object} formConfig 整个表单配置
 * @param {String} type 生成类型，文件或弹窗等
 */
export function makeUpHtml(formConfig, type) {
  const htmlList = [];
  confGlobal = formConfig;
  // 判断布局是否都沾满了24个栅格，以备后续简化代码结构
  someSpanIsNot24 = formConfig.fields.some(item => item.config.span !== 24);
  // 遍历渲染每个组件成html
  formConfig.fields.forEach(el => {
    htmlList.push(layouts[el.layout](el));
  });
  const htmlStr = htmlList.join('\n');
  // 将组件代码放进form标签
  let temp = buildFormTemplate(formConfig, htmlStr, type);
  // dialog标签包裹代码
  if (type === 'dialog') {
    temp = dialogWrapper(temp);
  }
  confGlobal = null;
  return temp;
}
