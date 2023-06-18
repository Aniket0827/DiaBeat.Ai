import React from 'react';
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import { CategoryScale , LinearScale } from 'chart.js';
Chart.register(
    CategoryScale,LinearScale
);

function Profile() {
  const data = {
    labels: ['Diabetes', 'Heart Disease', 'High Blood Pressure', 'Arthritis', 'Depression'],
    datasets: [
      {
        label: 'Health Risks',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Health Risk Predictor</h2>
      <div>
        {/* Actual component for displaying health risks would go here */}
      </div>
      <h2>Recommended Actions</h2>
      <div>
        {/* Actual component for displaying recommendations would go here */}
      </div>
      <h2>Historical Predictions</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Profile;