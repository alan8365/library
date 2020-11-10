import { routerRedux } from 'dva';
import * as bookService from '../services/book';
import { message } from "antd";

export default {
  namespace: 'book',
  state: {
    query: []
  },
  effects: {
    * GET_List({ payload, callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 取得書籍列表
        const response = yield call(bookService.GET_List, payload);
        yield put({ type: 'SAVE_BookList', payload: response });
  
        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },

    * POST_Favorite({ payload, callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 喜歡書籍
        yield call(bookService.POST_Favorite, payload);

        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },

    * GET_Favorite({ payload, callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 取得書籍列表
        const response = yield call(bookService.GET_Favorite, payload);
        yield put({ type: 'SAVE_FavoriteList', payload: response });

        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },

    * GET_Book({ payload, callback, loading }, { put, call, select }) {
      try {
        if (loading) { loading(true); }

        // 取得書籍列表
        const response = yield call(bookService.GET_Book, payload);
        yield put({ type: 'SAVE_Book', payload: response });
  
        if (loading) { loading(false); }
        if (callback) { callback(); }
      } catch (err) {
        console.log(err);
      }
    },



  },
  reducers: {

    SAVE_BookList(state, { payload }) {
      return {
        ...state,
        bookList: payload
      };
    },

    SAVE_FavoriteList(state, { payload }) {
      return {
        ...state,
        favoriteList: payload
      };
    },

    SAVE_Book(state, { payload }) {
      return {
        ...state,
        book: payload
      };
    },


  }
};
