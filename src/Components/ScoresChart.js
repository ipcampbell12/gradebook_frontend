import React, { useState, useEffect } from 'react';

import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { Pie } from "react-chartjs-2"

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)



function ScoresChart({ scores }) {

    const scoreCount = (scores) => {

        const gradeList = scores.map(x => x.score)
        const occurrences = gradeList.reduce(function (obj, item) {
            obj[item] = (obj[item] || 0) + 1;
            return obj;
        }, {});

        return occurrences
    }

    // Doesn't work for 0
    const possibleList = Object.keys(scoreCount(scores))
    const countsList = Object.values(scoreCount(scores))

    //console.log(scoreCount(possibleList))
    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        // console.log(categoryList)
        setChartData({
            labels: possibleList,
            datasets: [{
                label: '',
                data: countsList,
                borderColor: "rgb(53,162,235)",
                backgroundColor: [
                    'rgba(255, 0, 0,0.8)',
                    'rgba(255, 255, 0,0.8)',
                    'rgba(128, 255, 0,0.8)',
                    'rgba(6, 176, 15, 0.8)',
                ]
            }],

        });

        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                },
                title: {
                    display: true,
                    text: "Scores"
                },
                datalabels: {
                    display: true,
                    align: 'left',
                    backgroundColor: '#ccc',
                    borderRadius: 3,
                    font: {
                        size: 18,
                    },
                },

            }

        });

    }, [scores])


    return (
        <div className="scores-chart">
            <Pie options={chartOptions} data={chartData} className='pie' />
        </div>
    );
}

export default ScoresChart;