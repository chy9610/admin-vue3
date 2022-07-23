import { ElLoading } from 'element-plus';

// 全局 Loading
let loadingInstance: ReturnType<typeof ElLoading.service>;

// 显示 Loading
const startLoading = () => {
	loadingInstance = ElLoading.service({
		fullscreen: true,
		lock: true,
		text: 'Loading...',
		background: 'rgba(0,0,0,0.7)',
	});
};
// 隐藏 Loading
const endLoading = () => {
	loadingInstance.close();
};

// Loading 计数
let needLoadingRequestCount = 0;

/**
 * 那么 showFullScreenLoading() tryHideFullScreenLoading() 要做的事就是将同一时刻的请求合并。
 * 声明 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
 * 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
 */

// 显示全屏Loading
export const showFullScreenLoading = () => {
	if (needLoadingRequestCount === 0) {
		startLoading();
	}
	needLoadingRequestCount++;
};

// 尝试隐藏 Loading
export const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount < 0) {
		return;
	}
	needLoadingRequestCount--;

	// Loading 计数为0时，隐藏 Loading
	if (needLoadingRequestCount === 0) {
		endLoading();
	}
};
