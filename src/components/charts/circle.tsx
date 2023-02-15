import React from 'react';
import Chart from 'react-apexcharts';

interface userDataT {
	userData: any;
}
const MyChartComponent = ({ userData }: userDataT) => {
	const options = {
		labels: ['Cases', 'Recovered', 'Deaths','Deaths','Deaths'],
		legend: {
			show: false,
		},
		Chart:{
			type: 'area',
			toolbar: {
                show: true,
                tools: {
                  download: false
                }
              }
		},
        colors:['#FF4560', '#775DD0', '#008FFB','#00E396','#FEB019']
	};

	return (
		<div className='app'>
			<div className='row'>
				<div className='mixed-chart'>
					<Chart
						options={options}

						series={userData.map((data: number) => data)}
						type='donut'
						width='100%'
						height='auto'
					/>
				</div>
			</div>
		</div>
	);
};

export default MyChartComponent;
