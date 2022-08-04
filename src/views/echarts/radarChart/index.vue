<template>
    <div ref="echartsRef" class="content-box"></div>
</template>

<script lang='ts' setup name="radarEcharts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useEcharts } from '@/hooks/useEcharts';

const echartsRef = ref<HTMLElement>()
onMounted(() => {
    const radarEcharts: echarts.ECharts = echarts.init(echartsRef.value as HTMLElement);
    const option: echarts.EChartsOption = {
        title: {
            text: "Basic Radar Chart",
            textStyle: {
                color: '#a1a1a1'
            }
        },
        legend: {
            data: ['Allocated Budget', 'Actual Spending'],
            textStyle: {
                color: '#a1a1a1'
            }
        },
        silent: true,
        radar: {
            axisTick: {
                show: false,
            },
            indicator: [
                { name: "Sales", max: 6500 },
                { name: "Administration", max: 16000 },
                { name: "Information Technology", max: 30000 },
                { name: "Customer Support", max: 38000 },
                { name: "Development", max: 52000 },
                { name: "Marketing", max: 25000 }
            ]
        },
        series: [
            {
                name: 'Budget vs Spending',
                type: 'radar',
                data: [{
                    name: 'Allocated Budget',
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                }, {
                    name: 'Actual Spending',
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                }]
            }
        ]
    }
    useEcharts(radarEcharts, option)
})
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>