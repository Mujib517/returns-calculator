import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const { amount, finalAmount } = data;

    const chartData = {
        labels: ['Invested', 'Returns'],
        datasets: [
            {
                label: '',
                data: [amount, finalAmount - amount],
                backgroundColor: [
                    '#D97706',
                    'rgb(21 128 61)',
                ],
                
                borderWidth: 2,
            },
        ],
    };

    return <Pie data={chartData} />;
};

export default PieChart;
