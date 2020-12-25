import {
  ADD_COMPONENT,
  CHANGE_POSITION,
  DELETE_DRAG_CARD,
  COPY_DRAG_CARD,
  SET_CURRENT_ITEM,
  ACTIVE_FORM_ITEM,
  EMPTYPANEL,
  PREVIEWFORM,
  INIT_FORM_ATTRIBUTE,
  UPDATE_GLOBAL_ID
} from '../action-types';
import { formConfig } from '../config/component';
import { clearDragCardList } from "@/utils/db";
export default {
  state: {
    dragCardList: [],
    globalCount: 0,
    activeChartsItem: null,
    activeData: null,
    activeId: 0,
    isDrawerVisible: false,
    formConfig: null
  },
  getters: {
    formConfig: state => {
      if(!state.formConfig){
        return formConfig;
      }
      return state.formConfig;
    }
  },
  mutations: {
    // 点击添加 统一走这里，更新id在拖入之前拼装。
    addComponent(state, payload) {
      state.dragCardList.push(payload);
    },
    // 在容器内调整位置
    changePosition(state, payload) {
      state.dragCardList = [...payload];
    },
    // 删除组件
    deleteDragCard(state, payload) {
      const { index, parent, id } = payload;
      if (parent) {
        parent.splice(index, 1);
      } else {
        state.dragCardList = state.dragCardList.filter(item => item.id !== id);
      }
    },
    // 复制卡片
    copyDragCard(state, payload) {
      let copy = state.dragCardList.filter(item => item.id === payload.id);
      state.dragCardList.push({
        ...copy[0],
        id: state.globalCount++
      });
    },
    // 选中当前图标组件的配置
    setCurrentItem(state, payload) {
      state.activeChartsItem = payload.config;
    },
    //选中组件的实践
    activeFormItem(state, payload) {
      if (!payload) {
        return;
      }
      state.activeId = payload.id;
      state.activeData = payload;
    },
    //清空画布的内容
    emptyPanel(state) {
      state.globalCount = 0;
      state.dragCardList = [];
      clearDragCardList();
    },
    //卡片预览
    previewForm(state, payload) {
      state.isDrawerVisible = payload;
    },
    //初始化表单属性
    initFormAttribute(state) {
      state.formConfig = formConfig;
    },
    // 更新全局id
    updateGlobalId(state, payload) {
      state.globalCount = payload;
    }
  },
  actions: {
    [ADD_COMPONENT]({ commit }, payload) {
      commit('addComponent', payload);
    },
    [CHANGE_POSITION]({ commit }, payload) {
      commit('changePosition', payload);
    },
    [DELETE_DRAG_CARD]({ commit }, payload) {
      commit('deleteDragCard', payload);
    },
    [COPY_DRAG_CARD]({ commit }, payload) {
      commit('copyDragCard', payload);
    },
    [SET_CURRENT_ITEM]({ commit }, payload) {
      commit('setCurrentItem', payload);
    },
    [ACTIVE_FORM_ITEM]({ commit }, payload) {
      commit('activeFormItem', payload);
    },
    [EMPTYPANEL]({ commit }, payload) {
      commit('emptyPanel', payload);
    },
    [PREVIEWFORM]({ commit }, payload) {
      commit('previewForm', payload);
    },
    [INIT_FORM_ATTRIBUTE]({ commit }, payload) {
      commit('initFormAttribute', payload);
    },
    [UPDATE_GLOBAL_ID]({ commit }, payload) {
      commit('updateGlobalId', payload);
    }
  }
};
