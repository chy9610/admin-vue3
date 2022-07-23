import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 记载进度条
NProgress.configure({
	easing: 'ease', // 动画方式
	speed: 500, // 动画执行时间
	showSpinner: true, // 加载时是否显示icon
	trickleSpeed: 200, // 自动递增间隔
	minimum: 0.3, // 初始化时的最小百分比
});

export default NProgress;
