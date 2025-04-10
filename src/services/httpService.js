import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, //har coockie i ke http- only coockie bashe, dakhele coockie haye moroorgar zakhire shode bashe,be soorate automatic ahr coocki ke dakhele mroorgar bashe be samte backend ferestade mishe, va az samte backened hadle mishe
  //true => http-only coockies will be saved in the browser and automatically will send to backend => and backend hadels it
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
