import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
    const { amount, finalAmount } = data;

    const chartData = {
        labels: ['Invested Amount', 'Future Value'],
        datasets: [
            {
                label: 'Investment Breakdown',
                data: [amount, finalAmount - amount],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    return <Pie data={chartData} />;
};

export default PieChart;
