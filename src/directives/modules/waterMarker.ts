/*
  需求：给整个页面添加背景水印。

  思路：
    1、使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。
    2、将其设置为背景图片，从而实现页面或组件水印效果
  
  使用：设置水印文案，颜色，字体大小即可
  <div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
*/
import type { Directive, DirectiveBinding } from 'vue';

const addWaterMarker: Directive = (str: string, parentNode: any, font: any, textColor: string) => {
	let canvasHtml = document.createElement('canvas');
	parentNode.appendChild(canvasHtml);
	canvasHtml.width = 200;
	canvasHtml.height = 150;
	canvasHtml.style.display = 'block';
	let canvas = canvasHtml.getContext('2d') as CanvasRenderingContext2D;
	canvas.rotate((-20 * Math.PI) / 180); //旋转角度
	canvas.font = font; // 字体样式
	canvas.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'; // 填充颜色
	canvas.textAlign = 'left' as CanvasTextAlign; // 文本对齐方式
	canvas.textBaseline = 'middle' as CanvasTextBaseline; // 文本下划线
	canvas.fillText(str, canvasHtml.width / 2, canvasHtml.height / 2); // 文字填充密度
	parentNode.style.backgroundImage = `url(${canvasHtml.toDataURL('image/png')})`; // 背景形式填充
};

const waterMarker = {
	mounted(el: DirectiveBinding, binding: DirectiveBinding) {
		addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor);
	},
};

export default waterMarker;
