import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface BarChartProps {
	series: { name: string; data: number[] }[];
}

const BarChart: React.FC<BarChartProps> = ({ series }) => {
	const [option] = useState<ApexOptions>({
		chart: {
			type: 'bar',
			toolbar: {
				show: true,
				tools: {
					download: false,
				},
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
			},
		},

		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return '$ ' + val + ' thousands';
				},
			},
		},
		legend: {
			show: false,
		},
	});

	return <Chart options={option} type='bar' width='100%' height={200} series={series} />;
};

export default BarChart;
