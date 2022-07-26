/**
 * v-debounce
 * 按钮防抖指令，可自行扩展至input
 * 接收参数：function类型
 */

import type { Directive, DirectiveBinding } from 'vue';

interface ElType extends HTMLElement {
	__handleCLick__: () => any;
}

const debounce: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== 'function') {
			throw 'CallBack must be a function !!!';
		}
		let timer: NodeJS.Timeout | null = null;
		el.__handleCLick__ = function () {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				binding.value();
			}, 500);
		};
		el.addEventListener('click', el.__handleCLick__);
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener('click', el.__handleCLick__);
	},
};

export default debounce;
