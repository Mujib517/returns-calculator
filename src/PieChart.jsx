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

    const formatNumber = (value, locale) => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: 'INR'
        }).format(value);
    };

    const locale = 'en-IN';  

    const pieChartOptions = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return formatNumber(tooltipItem.raw, locale);
                    }
                }
            }
        }
    };

    return <Pie data={chartData} options={pieChartOptions} />;
};

export default PieChart;
