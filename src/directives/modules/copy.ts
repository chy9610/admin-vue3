/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */

import type { Directive, DirectiveBinding } from 'vue';
import { ElMessage } from 'element-plus';

interface ElType extends HTMLElement {
	copyData: string | number;
	__handlerClick__: any;
}

const copy: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
		el.addEventListener('click', handlerClick);
	},
	updated(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener('click', el.__handlerClick__);
	},
};

function handlerClick(this: any) {
	const input = document.createElement('input');
	input.value = this.coptData.toLocaleString();
	document.body.appendChild(input);
	input.select();
	document.execCommand('Copy');
	document.body.removeChild(input);
	ElMessage({
		type: 'success',
		message: '复制成功',
	});
}

export default copy;