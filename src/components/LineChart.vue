<template>
	<div>
		<LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" />
	</div>
</template>

<script>
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import { Chart as ChartJS, Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement } from "chart.js";
ChartJS.register(Tooltip, Legend, LineElement, LinearScale, CategoryScale, PointElement);


export default {
	name: "LineChart",
	components: {
		LineChartGenerator,
	},
	props: {
		sessionsData: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			chartData: {
				datasets: [
					{
						label: "Total sessions",
						data: this.sessionsData,
						borderColor: "#4935bb",
						backgroundColor: "#4935bb",
						borderWidth: 1,
					},
				],
			},
			chartOptions: {
				parsing: {
					xAxisKey: "date",
					yAxisKey: "tip",
				},
				tension: 0.4,
				responsive: true,
				maintainAspectRatio: false,
			},
		};
	},
	watch: {
		sessionsData(newValue) {
			// Cuando las props cambian, actualizamos la data del gráfico
			this.chartData.datasets[0].data = newValue;
		},
	},
};
</script>
