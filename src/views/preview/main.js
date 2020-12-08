import Vue from 'vue';
import { loadScriptQueue } from '@/utils/loadScript';
import axios from 'axios';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.prototype.$axios = axios;
Vue.use(Antd);

const $previewApp = document.getElementById('previewApp');
const childAttrs = {
  file: '',
  dialog:
    ' width="600px" class="dialog-width" v-if="visible" :visible.sync="visible" :modal-append-to-body="false" '
};

window.addEventListener('message', init, false);

function buildLinks(links) {
  let strs = '';
  links.forEach(url => {
    strs += `<link href="${url}" rel="stylesheet">`;
  });
  return strs;
}

function init(event) {
  if (event.data.type === 'refreshFrame') {
    const code = event.data.data;
    const attrs = childAttrs['file'];
    let links = '';

    if (Array.isArray(code.links) && code.links.length > 0) {
      links = buildLinks(code.links);
    }

    $previewApp.innerHTML = `${links}<style>${code.css}</style><div id="app"></div>`;

    if (Array.isArray(code.scripts) && code.scripts.length > 0) {
      loadScriptQueue(code.scripts, () => {
        newVue(attrs, code.js, code.html);
      });
    } else {
      newVue(attrs, code.js, code.html);
    }
  }
}

function newVue(attrs, main, html) {
  main = eval(`(${main})`);
  main.template = `<div>${html}</div>`; 
  main.components = lazyImportComponent(html);
  new Vue({
    components: {
      child: main
    },
    data() {
      return {
        visible: true
      };
    },
    template: `<div><child ${attrs}/></div>`
  }).$mount('#app');
}

function lazyImportComponent(html){
  let components = {};
  if(html){
    if(html.indexOf('shr-text')){
      const shrText = () => import('@/components/common/Text/index');
      components['shrText'] = shrText;
    }
  }
  return components;
}
