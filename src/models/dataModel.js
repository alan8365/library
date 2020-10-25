import * as dataService from '../services/dataService';
import { message } from "antd";

export default {
	namespace: 'data',
	state: {
		query: []
	},
	effects: {
		* POST_BasicStatistics ({ payload, callback, loading }, {put, call, select}){
        const hide = message.loading("資料讀取中...", 0);
        try{
          if (loading) { loading(true); }

          // 取得基本統計資料
          const response = yield call (dataService.POST_BasicStatistics, payload);
          yield put({ type: 'SAVE_BasicStatistics', payload: response});

          if (loading) { loading(false); }
          if (callback) { callback(); }
        }catch(err){
          console.log(err);
        }
        hide();
    },

    *SET_Query({ payload }, { put }) {
        try {
          yield put({ type: "SAVE_Query", payload: payload });
          console.log(payload)
        } catch (error) {
          console.log(error);
        }
    }
		
	},
	reducers: {

        SAVE_BasicStatistics(state, { payload }) {
            return {
              ...state,
              basicStatistics: payload
            };
        },

        SAVE_Query(state, { payload }) {
            return {
              ...state,
              query: payload
            };
        }
	}
};
