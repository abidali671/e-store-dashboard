import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface AreaChartProps {
	series: { name: string; data: number[] }[];
}

const AreaChart: React.FC<AreaChartProps> = ({ series }) => {
	const [option] = useState<ApexOptions>({
		chart: {
			// height: 350,
			type: 'area',
			toolbar: {
				show: false,
				tools: {
					download: false,
				},
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		xaxis: {
			type: 'datetime',
			categories: [
				'2018-09-19T00:00:00.000Z',
				'2018-09-19T01:30:00.000Z',
				'2018-09-19T02:30:00.000Z',
				'2018-09-19T03:30:00.000Z',
				'2018-09-19T04:30:00.000Z',
				'2018-09-19T05:30:00.000Z',
				'2018-09-19T06:30:00.000Z',
			],
		},
		tooltip: {
			enabled: true,
		},
	});

	return <Chart options={option} type='area' width='100%' height={200} series={series} />;
};

export default AreaChart;
