import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading';
import { AxiosCanceler } from './helper/axiosCancel';
import { checkStatus } from './helper/checkStatus';
import { ResultEnum } from '@/enums/httpEnum';
import { ResultData } from '@/api/interface';
import { GlobalStore } from '@/store';
import { ElMessage } from 'element-plus';
import router from '@/routers';

const axiosCanceler = new AxiosCanceler();

const config = {
	// 默认请求地址，可以在 .env 开头的文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 请求超时时长
	timeOut: 10000,
	// 跨域时允许携带凭证
	withCredentials: true,
};

// 请求类
class RequestHttp {
	service: AxiosInstance;
	constructor(config: AxiosRequestConfig) {
		// 实例化 Axios
		this.service = axios.create(config);

		// 请求拦截
		this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				const globalStore = GlobalStore();
				config.headers!.noloading || showFullScreenLoading();
				const token = globalStore.token;
				// 设置全局请求头，并携带Token
				return { ...config, headers: { 'x-access-token': token } };
			},
			(err: AxiosError) => {
				return Promise.reject(err);
			}
		);

		// 响应拦截
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;
				const globalStore = GlobalStore();
				// 请求完成之后移除本次请求
				axiosCanceler.removePending(config);
				// 移除loading加载动画
				tryHideFullScreenLoading();

				// 登陆状态失效
				if (data.code === ResultEnum.OVERDUE) {
					ElMessage.error(data.msg);
					// 去除Token原有记录
					globalStore.setToken('');
					// 重定向登陆页
					router.replace({
						path: '/login',
					});

					return Promise.reject(data);
				}

				// 全局错误信息拦截 (防止文件下载时没有返回数据流，没有code，导致报错)
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					ElMessage.error(data.msg);

					return Promise.reject(data);
				}

				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				tryHideFullScreenLoading();
				// 根据返回不同的服务状态码，做出相应的处理
				if (response) {
					return checkStatus(response.status);
				}
				// 当网络掉线（断网）之后，服务器结果都没有返回，则重定向至 500 页面
				if (!window.navigator.onLine) {
					return router.replace({ path: '/500' });
				}

				return Promise.reject(error);
			}
		);
	}
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new RequestHttp(config);
