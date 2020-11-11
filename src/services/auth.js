import request from "../utils/request";


// 登入
export const POST_Login = (payload) => {
  return request.post("/auth/login", payload);
};

// 註冊
export const POST_Register = (payload) => {
  return request.post("/auth/store", payload);
};

// 取得個人資料
export const GET_WhoAmI = () => {
  const token = localStorage.getItem("token");
  console.log(token)
  return request.get("/auth/whoAmI", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};

// 登出
export const POST_Logout = () => {
  const token = localStorage.getItem("token");
  return request.post("/auth/logout", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};
