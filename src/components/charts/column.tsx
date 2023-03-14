import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface userDataT {
	userData: any;
}
const ColumnChart = ({ userData }: userDataT) => {
	const [option] = useState<ApexOptions>({
		chart: {
			type: 'bar',
			height: 'auto',

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
				//   endingShape: 'rounded',
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

		yaxis: {
			title: {
				text: '$ (thousands)',
			},
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

	return (
		<div className='app'>
			<div className='row'>
				<div className='mixed-chart'>
					<Chart
						options={option}
						type='bar'
						width='100%'
						height='200px'
						series={userData.map((data: number) => data)}
					/>
				</div>
			</div>
		</div>
	);
};

export default ColumnChart;
