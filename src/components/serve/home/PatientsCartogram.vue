<template>
  <div class="Echarts">
    <div id="pc" style="width: 100%; height: 20rem"></div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";

export default {
  name: "pc",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("pc"));

      // 指定图表的配置项和数据
      var dataAxis = [
        "10-20",
        "10-21",
        "10-22",
        "10-23",
        "10-24",
        "10-25",
        "10-26",
      ];
      var data = [220, 18, 11, 24, 90, 330, 32];
      var dataShadow = [];
      var option = {
        tooltip: {},
        title: {
          text: "就诊人数详图",
          subtext: "patients",
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            // inside: true,
            textStyle: {
              color: "#000000",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#999",
            },
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              color: "rgba(0,0,0,0.05)",
            },
            barGap: "-100%",
            barCategoryGap: "40%",
            data: dataShadow,
            animation: false,
          },
          {
            type: "bar",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: data,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  },
};
</script>