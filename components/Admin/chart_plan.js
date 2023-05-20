import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const ChartPlan = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/chart_admin/getChartPlan');
      const data = await res.json();

      const chartData = data.map((plan) => plan.num_orders); // Dữ liệu biểu đồ từ API
      const chartLabels = data.map((plan) => plan.plan_id); // Nhãn cho các giá trị trong biểu đồ từ API

      const chartConfig = {
        type: 'pie',
        data: {
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
              borderColor: [
                '#E53935',
                '#1E88E5',
                '#FDD835',
                '#2E7D32',
                '#BDBDBD',
                '#F4511E',
                '#6A1B9A',
                '#004D40',
                '#D81B60',
              ],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0 ',
                '#E7E9ED',
                '#FF9F40',
                '#8c6eff',
                '#00b894',
                '#fd79a8',
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      };

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, chartConfig);

      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mx-auto mt-14 w-[150px] text-xl font-semibold capitalize ">PLAN CHART</h1>
      <div className="mx-auto my-auto flex w-1/2 bg-slate-50">
        <div className="my-auto h-fit w-full rounded-xl  border border-gray-400 pt-0  shadow-xl">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default ChartPlan;
