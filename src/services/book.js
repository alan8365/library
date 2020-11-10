import request from "../utils/request";

// 取得書籍列表
export const GET_List = async (page) => {
	try {
		const { data } = await request({
			method: 'get',
			url: `book?page=${page}`,
		});
		return data;
	} catch (e){
		return e;
	}
};

// 喜歡
export const POST_Favorite = async (isbn) => {
	try {
		const { data } = await request({
			method: 'post',
			url: `favorite/${isbn}}`,
		});
		return data;
	} catch (e){
		return e;
	}
};

// 喜歡列表
export const GET_Favorite = async (page) => {
	try {
		const { data } = await request({
			method: 'get',
			url: `favorite?page=${page}`,
		});
		return data;
	} catch (e){
		return e;
	}
};

// 取得書籍列表
export const GET_Book = async (isbn) => {
	try {
		const { data } = await request({
			method: 'get',
			url: `book/${isbn}`,
		});
		return data;
	} catch (e){
		return e;
	}
};
