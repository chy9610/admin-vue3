<template>
    <div ref="echartsRef" class="content-box"></div>
</template>

<script lang='ts' setup name="pieEcharts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useEcharts } from '@/hooks/useEcharts';

const echartsRef = ref<HTMLElement>()

onMounted(() => {
    const pieEcharts: echarts.ECharts = echarts.init(echartsRef.value as HTMLElement);
    const option: echarts.EChartsOption = {
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/> {b} : {c}（{d}）%"
        },
        legend: {
            left: "center",
            top: "bottom",
            data: ["赵", "钱", "孙", "李", "周", "吴", "郑", "王"],
            textStyle: {
                color: "#a1a1a1"
            }
        },
        series: [
            {
                name: '姓氏占比',
                type: 'pie',
                radius: [60, 300],
                center: ["50%", "50%"],
                roseType: "radius",
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    show: true
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { value: 40, name: "赵" },
                    { value: 36, name: "钱" },
                    { value: 30, name: "孙" },
                    { value: 26, name: "李" },
                    { value: 24, name: "周" },
                    { value: 18, name: "吴" },
                    { value: 16, name: "郑" },
                    { value: 16, name: "王" }
                ]
            }
        ]
    }
    useEcharts(pieEcharts, option)
})
</script>

<style lang='scss' scoped>
</style>