import React, { Component } from 'react';
import Panel from './Panel';
import news from './news.json';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};



class News extends Component {
    render() {
        return (
        <Panel title='News'>
            <h1>Newss</h1>
            { news.map((newsDetail, index) => {
                return <h1>{newsDetail.title}</h1>
            })
            }


            <Doughnut data={data} />
        </Panel>
        )
    }
}



export default News;



