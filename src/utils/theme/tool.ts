import { ElMessage } from 'element-plus';

/**
 * hex颜色转rgb颜色
 * @param str 颜色值字符串
 * @returns 返回处理后的颜色值
 */
export const hexToRgb = (color: string) => {
	const rgb = /^\#[0-9A-Fa-f]{6}$/;
	let hexs: any = '';
	if (!rgb.test(color)) return ElMessage({ type: 'warning', message: '输入了错误的Hex颜色值' });
	hexs = color.replace('#', '').match(/../g);
	for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16).toString();
	return hexs;
};

/**
 * rgb颜色转Hex颜色
 * @param r 代表红色
 * @param g 代表绿色
 * @param b 代表蓝色
 * @returns 返回处理后的颜色值
 */
export const rgbToHex = (r: any, g: any, b: any) => {
	let reg = /^\d{1,3}$/;
	if (!reg.test(r) || !reg.test(g) || !reg.test(b))
		return ElMessage.warning('输入错误的rgb颜色值');
	let hexs = [r.toString(16), g.toString(16), b.toString(16)];
	for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
	return `#${hexs.join('')}`;
};

/**
 * 变浅颜色处理
 * @param {string} color 颜色字符串
 * @param {number} level 变浅的程度，限0-1之间
 * @returns {string} 处理后的颜色值
 */
export const getLightColor = (color: string, level: number) => {
	const reg = /^\#[0-9A-Fa-f]{6}$/;
	if (!reg.test(color)) return ElMessage({ type: 'warning', message: '输入了错误的Hex颜色值' });
	if (level >= 1) level = 1;
	if (level <= 0) level = 0;
	let rgb = hexToRgb(color);
	for (let i = 0; i < 3; i++) rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
};
/**
 * 加深颜色处理
 * @param {string} color 颜色字符串
 * @param {number} level 加深的程度，限0-1之间
 * @returns {string} 处理后的颜色值
 */
export const getDarkColor = (color: string, level: number) => {
	const reg = /^\#[0-9A-Fa-f]{6}$/;
	if (!reg.test(color)) return ElMessage({ type: 'error', message: '输入错误的Hex颜色值' });
	if (level >= 1) level = 1;
	if (level <= 0) level = 0;
	let rgb = hexToRgb(color);
	for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
};
