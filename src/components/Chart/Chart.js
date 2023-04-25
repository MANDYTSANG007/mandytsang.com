import React from 'react';
import "./Chart.css";
import { Bar } from 'react-chartjs-2';
import { skillData } from '../../data/skills-data';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';

// to activate
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
);

const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
            borderRadius: 4,
        },
    },
    responsive: true,
    plugins: {
        legend: {
        position: 'right',
        },
        title: {
        display: false,
        text: 'Horizontal Bar Chart',
        },
    },
    layout: {
        padding: {
            left: '5%',
            right: '5%',
            top: '10%',
            bottom: '10%',
        },
    },
    scales: {
        y: {
            borderWidth: 3, // set the width of the y-axis
            grid: {
                lineWidth: 0 // set the width of the grid lines to zero to remove them
            },
            ticks: {
                font: { 
                    size: 14,
                },
            }
        },
        x: {
            grid: {
                lineWidth: 0 // set the width of the x-axis grid lines
            },
            ticks: {
                display: false    // remove x-axis labels
            }
        }
    },
};

function Chart() {
    const designSkills = skillData.filter((skill) => skill.title === 'Design')[0];
    const fullStackSkills = skillData.filter((skill) => skill.title === 'Full-Stack Development')[0];
    const researchSkills = skillData.filter((skill) => skill.title === 'UX Research')[0];

    const designChartData = {
        labels: designSkills.skills.map((skill) => skill.name),
        datasets: [
            {
                label: 'Skill Level',
                data: designSkills.skills.map((skill) => skill.level),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                barThickness: 10,
                maxBarThickness: 20,
                borderWidth: 1
            },
        ],
    };

    const fullStackChartData = {
        labels: fullStackSkills.skills.map((skill) => skill.name),
        datasets: [
            {
                label: 'Skill Level',
                data: fullStackSkills.skills.map((skill) => skill.level),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                barThickness: 10,
                maxBarThickness: 20,
                borderWidth: 1
            },
        ],
    };

    const researchChartData = {
        labels: researchSkills.skills.map((skill) => skill.name),
        datasets: [
            {
                label: 'Skill Level',
                data: researchSkills.skills.map((skill) => skill.level),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgb(153, 102, 255)',    
                barThickness: 10,
                maxBarThickness: 20,    
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='chart-container'>
            <div className='chart'>
                <h2> UX Design </h2>
                <Bar options={options} data={designChartData} />
            </div>
            <div className='chart'>
                <h2> Full-Stack </h2>
                <Bar options={options} data={fullStackChartData} />
            </div>
            <div className='chart'>
                <h2> UX Research </h2>
                <Bar options={options} data={researchChartData} />
            </div>
        </div>
    );
}

export default Chart;


