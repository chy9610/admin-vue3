import axios, { AxiosRequestConfig, Canceler } from 'axios';
import { isFunction } from '@/utils/is/index';
// 数据序列化;
import qs from 'qs';

// 声明一个Map 用于存放每一个请求的标识及取消函数
let pendingMap = new Map<string, Canceler>();

// 序列化请求整体数据
export const getPendingUrl = (config: AxiosRequestConfig) => {
	return [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&');
};

// 请求取消类
export class AxiosCanceler {
	/**
	 * description 添加请求
	 * @param config
	 */
	addPending(config: AxiosRequestConfig) {
		// 移除相同请求
		this.removePending(config);
		// 获取响应路径
		const url = getPendingUrl(config);
		config.cancelToken =
			config.cancelToken ||
			new axios.CancelToken(cancel => {
				if (!pendingMap.get(url)) {
					pendingMap.set(url, cancel);
				}
			});
	}
	/**
	 * description 移除请求
	 * @param config
	 */
	removePending(config: AxiosRequestConfig) {
		const url = getPendingUrl(config);
		if (pendingMap.has(url)) {
			const cancel = pendingMap.get(url);
			cancel && cancel();
			pendingMap.delete(url);
		}
	}
	/**
	 * description 移除所有请求
	 */
	removeAllPending() {
		pendingMap.forEach(cancel => {
			cancel && isFunction(cancel) && cancel();
		});
		pendingMap.clear();
	}
	/**
	 * description 重置
	 */
	reset() {
		pendingMap = new Map<string, Canceler>();
	}
}
