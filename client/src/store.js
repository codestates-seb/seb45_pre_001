// store.js

import { createStore } from 'redux';

// 초기 상태 설정
const initialState = {
  checkContainerVisible: false,
  isChecked: false,
  titleButtonVisible: true,
  tagButtonVisible: false,
  reviewButtonVisible: false,
  editorButtonVisible: false,
  editor2ButtonVisible: false,
  isDropdownOpen: false,
  editorContent: '',
};

// 리듀서 함수, 액션에 따라 상태를 업데이트
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHECK_CONTAINER_VISIBLE':
      return { ...state, checkContainerVisible: action.payload };
    case 'SET_IS_CHECKED':
      return { ...state, isChecked: action.payload };
    case 'SET_TITLE_BUTTON_VISIBLE':
      return { ...state, titleButtonVisible: action.payload };
    case 'SET_TAG_BUTTON_VISIBLE':
      return { ...state, tagButtonVisible: action.payload };
    case 'SET_REVIEW_BUTTON_VISIBLE':
      return { ...state, reviewButtonVisible: action.payload };
    case 'SET_EDITOR_BUTTON_VISIBLE':
      return { ...state, editorButtonVisible: action.payload };
    case 'SET_EDITOR2_BUTTON_VISIBLE':
      return { ...state, editor2ButtonVisible: action.payload };
    case 'SET_IS_DROPDOWN_OPEN':
      return { ...state, isDropdownOpen: !state.isDropdownOpen };
    case 'SET_EDITOR_CONTENT':
      return { ...state, editorContent: action.payload };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(rootReducer);

export default store;
