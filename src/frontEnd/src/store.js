// store.js

import { createStore } from 'redux';

// 초기 상태
const initialState = {
    sessionData: null,
};

// 리듀서 함수
const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SESSION_DATA':
            return {
                ...state,
                sessionData: action.payload,
            };
        case 'CLEAR_SESSION_DATA':
            return {
                ...state,
                sessionData: null,
            };
        case 'RESET_STATE':
            return initialState; // 상태 초기화
        default:
            return state;
    }
};

// Redux store 생성
const store = createStore(sessionReducer); // 리듀서 함수를 이용하여 store 생성

export default store; // store를 내보냅니다.
