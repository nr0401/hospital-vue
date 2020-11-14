<template>
  <div class="Echarts">
    <div id="myc" style="width: 100%; height: 20rem"></div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("myc"));

      // 指定图表的配置项和数据
      var colors = ["#5793f3", "#d14a61", "#675bba"];
      var option = {
        color: colors,
        title: {
          text: "人员分析图",
        },
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross",
          },
        },
        legend: {
          data: ["出勤医生", "入驻患者"],
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1],
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "入驻患者  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0],
              },
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return (
                    "出勤医生  " +
                    params.value +
                    (params.seriesData.length
                      ? "：" + params.seriesData[0].data
                      : "")
                  );
                },
              },
            },
            data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "出勤医生",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [134, 123, 85, 123, 44, 56, 78],
          },
          {
            name: "入驻患者",
            type: "line",
            smooth: true,
            data: [65, 152, 90, 123, 311, 76, 98],
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