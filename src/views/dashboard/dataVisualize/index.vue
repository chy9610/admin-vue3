<template>
    <div class="dataVisualize-box">

        <div class="top-box">
            <div class="top-title">数据可视化</div>
            <el-tabs v-model="data.activeName" @tab-click="handleTabClick">
                <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
            </el-tabs>
            <div class="top-content">
                <div class="item-left">
                    <span class="left-title">访问总数</span>
                    <div class="img-box">
                        <img src="./images/book-sum.png" alt="" />
                    </div>
                    <span class="left-number">{{ data.bookSum }}</span>
                </div>
                <div class="item-center">
                    <div class="gitee-traffic traffic-box">
                        <div class="traffic-img">
                            <img src="./images/add_person.png" alt="" />
                        </div>
                        <span class="item-value">2222</span>
                        <span class="traffic-name sle">Gitee 访问量</span>
                    </div>
                    <div class="gitHub-traffic traffic-box">
                        <div class="traffic-img">
                            <img src="./images/add_team.png" alt="" />
                        </div>
                        <span class="item-value">2222</span>
                        <span class="traffic-name sle">GitHub 访问量</span>
                    </div>
                    <div class="today-traffic traffic-box">
                        <div class="traffic-img">
                            <img src="./images/today.png" alt="" />
                        </div>
                        <span class="item-value">4567</span>
                        <span class="traffic-name sle">今日访问量</span>
                    </div>
                    <div class="yesterday-traffic traffic-box">
                        <div class="traffic-img">
                            <img src="./images/book_sum.png" alt="" />
                        </div>
                        <span class="item-value">1234</span>
                        <span class="traffic-name sle">昨日访问量</span>
                    </div>
                </div>
                <div class="item-right">
                    <div class="echarts-title">Gitee / GitHub 访问量占比</div>
                    <div class="book-echarts">
                        <Pie ref="pie" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-box">
            <div class="bottom-title">数据来源</div>
            <div class="bottom-tabs">
                <el-tabs v-model="data.activeName" class="demo-tabs" @tab-click="handleTabClick">
                    <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name">
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="curve-echarts">
                <Curve ref="curve" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="dataVisualize">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ECharts } from "echarts";
import Pie from "./components/pie.vue";
import Curve from "./components/curve.vue";
/* 声明echarts实例 */
interface ChartProps {
    [key: string]: ECharts | null;
}
/* 获取子组件的ref */
interface ChartExpose {
    initChart: (params: any) => ECharts;
}
const pie = ref<ChartExpose>();
const curve = ref<ChartExpose>();
const data = reactive({
    activeName: 1,
    bookSum: "848.132w"
});

/* 声明 */
let tab = [
    { label: "未来7日", name: 1 },
    { label: "近七日", name: 2 },
    { label: "近一月", name: 3 },
    { label: "近三月", name: 4 },
    { label: "近半年", name: 5 },
    { label: "近一年", name: 6 }
]

const handleTabClick = (): void => { };

// 模拟数据
let pieData = [
    { value: 5000, name: "Gitee 访问量" },
    { value: 5000, name: "GitHub 访问量" }
];
let curveData = [
    { value: 30, spotName: "掘金" },
    { value: 90, spotName: "CSDN" },
    { value: 10, spotName: "Gitee" },
    { value: 70, spotName: "GitHub" },
    { value: 20, spotName: "知乎" },
    { value: 60, spotName: "MyBlog" },
    { value: 55, spotName: "简书" },
    { value: 80, spotName: "StackOverFlow" },
    { value: 50, spotName: "博客园" }
];
const dataScreen: ChartProps = reactive({
    chart1: null,
    chart2: null
});

// 初始化Echarts
const initCharts = () => {
    dataScreen.chart1 = pie.value?.initChart(pieData) as ECharts;
    dataScreen.chart2 = curve.value?.initChart(curveData) as ECharts;
}
const resize = () => {
    Object.values(dataScreen).forEach(chart => {
        chart && chart.resize();
    })
}

onMounted(() => {
    /* 初始化echarts */
    initCharts();
    // 为浏览器绑定事件
    window.addEventListener("resize", resize);
});

/* 销毁时触发 */
onBeforeUnmount(() => {
    window.removeEventListener("resize", resize);
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>