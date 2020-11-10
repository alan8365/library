
const ax = axios.create({
  baseURL: config.api,
  timeout: 60000,
});

// 全域參數
// axios.defaults.baseURL = `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}/`;
const url = process.env.REACT_APP_BASE_URL;
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;


// 請求攔截器
axios.interceptors.request.use((config) => {
	if (localStorage.getItem('token')) {
		config.headers = {
			// 'Access-Control-Allow-Origin': '*',
			// 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
			// 'Access-Control-Max-Age': '86400',
			// 'Authorization': `${localStorage.getItem('token')}`,
			// 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
			// 'Pragma': 'no-cache',
			// 'Expires': '0'
		};
	} else {
		config.headers = {
			// 'Access-Control-Allow-Origin': '*',
			// 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
			// 'Access-Control-Max-Age': '86400',
			// 'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
			// 'Pragma': 'no-cache',
			// 'Expires': '0'
		};
	}


function call(_path, _method, _params = {}, _extendOption = {}) {
  let option = {
    url: _path,
    method: _method,
  };
  switch (_.toUpper(_method)) {
    case "PUT":
    case "POST":
    case "PATCH":
      option.data = _params;
      break;
    case "GET":
      option.params = _params;
      break;
    default:
      break;
  }
  option = {
    ...option,
    ..._extendOption,
  };

  return ax.request(option).then(checkStatus).then(responseData);
}

export default {
  call,
  get: generateShortCutMethod("GET"),
  post: generateShortCutMethod("POST"),
  put: generateShortCutMethod("PUT"),
  patch: generateShortCutMethod("PATCH"),
  delete: generateShortCutMethod("DELETE"),
}
})
