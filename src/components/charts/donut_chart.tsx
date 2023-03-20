import React from 'react';
import Chart from 'react-apexcharts';

interface DonutChartProps {
	series: number[];
}
const DonutChart: React.FC<DonutChartProps> = ({ series }) => {
	const options = {
		labels: ['Cases', 'Recovered', 'Deaths', 'Deaths', 'Deaths'],
		legend: {
			show: false,
		},
		Chart: {
			type: 'area',
			toolbar: {
				show: true,
				tools: {
					download: false,
				},
			},
		},
		colors: ['#FF4560', '#775DD0', '#008FFB', '#00E396', '#FEB019'],
	};

	return <Chart options={options} series={series} type='donut' width='100%' height={200} />;
};

export default DonutChart;
