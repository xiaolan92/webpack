
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { APIResponse } from './type';
import { BASE_API_URL } from './api';
import { message as Message } from 'antd';


const getToken = () => {
  return localStorage.getItem('token');
};
const removeToken = () => {
  localStorage.removeItem('token');
};

export const instance = axios.create({
  baseURL: BASE_API_URL,
  validateStatus(status) {
    return status < 400;
  },
});

instance.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization:token,
    };
  }
  return config;
});

instance.interceptors.response.use(response => {
  return response;
});


/**
 * Feature:
 *  1. Support customize onFulfilled and onRejected handler
 *  2. Support default backend service response error handler
 *  3. Support redux rejected action handler @see rejectedActionMessageHandler
 * @template T
 * @param {(string | AxiosRequestConfig)} url
 * @param {AxiosRequestConfig} [config]
 * @param {{
 *     onFulfilled?: (value: AxiosResponse<any>) => APIResponse<T>;
 *     onRejected?: (error) => any;
 *   }} [extra]
 * @return {*}  {Promise<APIResponse<T>>}
 */
export function request<T>(
  url: string | AxiosRequestConfig,
  config?: AxiosRequestConfig,
  extra?: {
    onFulfilled?: (value: AxiosResponse<any>) => APIResponse<T>;
    onRejected?: (error: any) => any;
  },
): Promise<APIResponse<T>> {
  const defaultFulfilled = (response: any) => response.data as APIResponse<T>;
  const defaultRejected = (error: any) => {
    throw standardErrorMessageTransformer(error);
  };
  const axiosPromise =
    typeof url === 'string' ? instance(url, config) : instance(url);
  return axiosPromise
    .then(extra?.onFulfilled || defaultFulfilled, error => {
      throw unAuthorizationErrorHandler(error);
    })
    .catch(extra?.onRejected || defaultRejected);
}

/**
 *  移除token
 * @param error
 * @returns
 */
function unAuthorizationErrorHandler(error: any) {
  if (error?.response?.status === 401) {
    removeToken();
  }
  return error;
}
/**
 * 处理错误
 * @param error
 * @returns
 */
function standardErrorMessageTransformer(error: any) {
  if (error?.response?.data?.message) {
    Message.warning(error?.response?.data?.message);
    return error?.response?.data?.message;
  }
  return error;
}
