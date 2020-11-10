import { routerRedux } from 'dva';
import * as authService from '../services/auth';
import { message } from "antd";

export default {
  namespace: 'auth',
  state: {
    query: []
  },
  effects: {
    * POST_Login({ payload, callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 登入
        const response = yield call(authService.POST_Login, payload);
        yield put({ type: 'SAVE_MemberInfo', payload: response });
        if(response.code===200){
          message.success('登入成功');
          yield put(routerRedux.push(`/`));
        }

        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },

    * POST_Register({ payload, callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 註冊
        const response = yield call(authService.POST_Register, payload);
        if(response.code===200){
          message.success('註冊成功，請去登入');
          yield put(routerRedux.push(`/login`));
        }

        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },

    * GET_WhoAmI({  callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 取得個人資訊
        const response = yield call(authService.GET_WhoAmI);
        yield put({ type: 'SAVE_MemberInfo', payload: response });

        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },

    * POST_Logout({  callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 登出
        yield call(authService.POST_Logout);
        localStorage.removeItem('token');

        // 導向登入頁面
				yield put(routerRedux.push('/login'));

        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },


  },
  reducers: {

    SAVE_MemberInfo(state, { payload }) {
      return {
        ...state,
        memberInfo: payload
      };
    },


  }
};
