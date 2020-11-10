import request from "../utils/request";

// 取得書籍列表
export const GET_List = (page) => {
  return request.get(`/book?page=${page}`);
};

// 喜歡
export const POST_Favorite = (isbn) => {
  return request.post(`/bofavoriteok/${isbn}`);
};

// 喜歡列表
export const GET_Favorite = (page) => {
  return request.get(`/favorite?page=${page}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 加一個帶token的範例
export const POST_WithToken = () => {
  const token = localStorage.getItem("token");
  return request.post(`/token`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 加一個帶form-data的範例
export const POST_WithFormData = () => {
  return request.post(`/token`, null, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 加一個兩個都帶的範例
export const POST_WithTokenAndFormData = () => {
  const token = localStorage.getItem("token");
  return request.post(`/token`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
