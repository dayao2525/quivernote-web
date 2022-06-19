import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

interface IHttpResponse<T> {
  code: number
  data?: T
  msg?: string
}


// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: '' });

api.interceptors.response.use(
  async function (response) {
      return response.data
  },
  function (error) {
      if (error.code === 'ECONNABORTED') {
          error.message = '请求超时'
      }
      return Promise.reject(error)
  },
)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

// 全局处理异常状态码情况，调用者只关注成功状态
const FetchData = async <T> (handle: Promise<any>): Promise<T | undefined>=> {
  try {
      const { code, data, msg } = await handle
      if (code !== 0) {
          throw new Error(msg)
      }
      return data
  } catch (e) {
      return Promise.reject(e)
  }
}


export { api, FetchData };
