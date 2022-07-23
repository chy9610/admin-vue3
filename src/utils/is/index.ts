const toString = Object.prototype.toString;

/**
 * description 是否为某种类型 (通过强制转字符串后的表现形式来判断)
 * @param {unknown} val 判定值
 * @param {string} type 判定类型
 * @returns {boolean}
 */
export function is(val: unknown, type: string) {
	return toString.call(val) === `[Object ${type}]`;
}

/**
 * description 是否为函数类型
 * @param {unknown} val
 * @returns {boolean}
 */
export function isFunction<T = Function>(val: unknown): val is T {
	return is(val, 'Function');
}

/**
 * description 是否为字符串类型
 * @param {unknown} val
 * @returns {boolean}
 */
export function isString<T = string>(val: unknown): val is T {
	return is(val, 'string');
}

/**
 * description 是否为数字类型
 * @param {unknown} val
 * @returns {boolean}
 */
export function isNumber<T = number>(val: unknown): val is T {
	return is(val, 'Number');
}

/**
 * description 是否为时间类型
 * @param {unknown} val
 * @returns {boolean}
 */
export function isDate<T = Date>(val: unknown): val is T {
	return is(val, 'Date');
}

/**
 * description 是否已定义
 * @param {unknown} val
 * @returns {boolean}
 */
export function isDef<T = unknown>(val?: T): val is T {
	return typeof val !== 'undefined';
}

/**
 * description 是否未定义
 * @param {unknown} val
 * @returns {boolean}
 */
export function isUnDef<T = unknown>(val?: T): val is T {
	return !isDef(val);
}
