import request from "../utils/request";

// 登入
export const POST_Login = async (payload) => {
	try {
		const { data } = await request({
			method: 'post',
			url: `auth/login`,
			data: payload
		});
		return data;
	} catch (e){
		return e;
	}
};

// 註冊
export const POST_Register = async (payload) => {

	try {
		return await request.post(`auth/store`, payload)
	} catch (e){
		return e;
	}
};

// 取得個人資料
export const GET_WhoAmI = async () => {
	try {
		const { data } = await request({
			method: 'get',
			url: `auth/whoAmI`,
		});
		return data;
	} catch (e){
		return e;
	}
};

// 登出
export const POST_Logout = async () => {
	try {
		const { data } = await request({
			method: 'post',
			url: `auth/logout`,
		});
		return data;
	} catch (e){
		return e;
	}
};