export default [
  {
    path: '/editor',
    component: () =>
      import(/*webpackChunkName:'editor'*/ '@/views/editor/index.vue')
  }
];
