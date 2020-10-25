import request from "../utils/request";

export const POST_BasicStatistics = async (payload) => {
	try {
		const { data } = await request({
			method: 'post',
      url: `${config.api}BasicStatistics`,
      data: payload
		});
		return data;
	} catch (e) {return e;}
};

