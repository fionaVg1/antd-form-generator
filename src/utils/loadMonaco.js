import * as monaco from 'monaco-editor';

// monaco-editor单例
let monacoEidtor;

/**
 * 动态加载monaco-editor cdn资源
 * @param {Function} cb 回调，必填
 */
export default function loadMonaco(cb) {
  if (monacoEidtor) {
    cb(monacoEidtor);
    return;
  }
  monacoEidtor = monaco;
  cb(monacoEidtor);
}
