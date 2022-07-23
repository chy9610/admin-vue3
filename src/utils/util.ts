// 处理路由数据（树形结构）
export function handlerRouter(routerList: Menu.MenuOptions[], newArr: string[] = []) {
	routerList.forEach((item: Menu.MenuOptions) => {
		if (typeof item === 'object' && item.path) {
			newArr.push(item.path);
		}

		if (item.children && item.children.length) {
			handlerRouter(item.children, newArr);
		}
	});

	return newArr;
}

/**
 * @description 获取浏览器默认语言
 * @returns {string}
 */
export function getBrowserLang() {
	const browserLang = navigator.language || navigator.browserLanguage;
	let defaultBrowserLang = '';
	if (
		browserLang.toLowerCase() === 'cn' ||
		browserLang.toLowerCase() === 'zh' ||
		browserLang.toLowerCase() === 'zh-cn'
	) {
		defaultBrowserLang = 'zh';
	} else {
		defaultBrowserLang = 'en';
	}
	return defaultBrowserLang;
}

/**
 * @description 生成随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @return number
 */
export function randomNum(min: number, max: number): number {
	let num = Math.floor(Math.random() * (min - max) + max);
	return num;
}

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string
 */
export function isType(val: any) {
	if (val === null) return 'null';
	if (typeof val !== 'object') return typeof val;
	else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}
