import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: [],
  mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: ""
      },
      scales: {
        xAxes: [
          {
            type: "time",
            time: {
              format: "YYYY-MM-DD"
            },
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Date"
            }
          }
        ],
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true,
              suggestedMax: 8
            }
          }
        ]
      }
    });
  }
};
