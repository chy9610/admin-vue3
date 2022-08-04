import { onUnmounted } from 'vue';
import * as echarts from 'echarts';
/**
 * 使用ECharts (为了添加图表响应式)
 * @param myChart Echarts实例（必传）
 * @param options Echarts 配置（必传）
 */
export const useEcharts = (myChart: echarts.ECharts, options: echarts.EChartsCoreOption) => {
	if (options && typeof options === 'object') {
		myChart.setOption(options);
	} else {
		throw 'Options must be a Object !!!';
	}
	const echartsResize = () => {
		myChart && myChart.resize();
	};

	// 第三个参数指的是： 是否在捕获或冒泡阶段执行；Enums: true => 捕获阶段，false => 冒泡阶段
	window.addEventListener('resize', echartsResize, false);

	onUnmounted(() => {
		window.removeEventListener('resize', echartsResize);
	});
};
