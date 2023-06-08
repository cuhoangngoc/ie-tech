import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ChartOrder = ({ month, year }) => {
  console.log(month, year)
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/chart_admin/getChartOrder?month=${month}&year=${year}`);
      const data = await res.json();

      const chartData = data.map((order) => order.order_count);
      const chartData3 = data.map((order) => order.cancelorder_count);
      const chartData2 = data.map((order) => order.revenue / 100); // Dữ liệu biểu đồ từ API
      const chartLabels = data.map((order) => order.month + '/' + order.year); // Nhãn cho các giá trị trong biểu đồ từ API

      const chartConfig = {
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets: [
            {
              label: 'Count order',
              data: chartData,
              backgroundColor: '#36A2EB',
              borderColor: '#1E88E5',
              borderWidth: 1,
              type: 'line',
              fill: false,
            },
            {
              label: 'Count cancelled order',
              data: chartData3,
              borderColor: '#E53935',
              borderDash: [5, 5],
              fill: false,
              type: 'line',
              lineTension: 0.5,
            },
            {
              label: 'Revenue (100$)',
              data: chartData2,
              borderColor: '#004D40',
              backgroundColor: '#00b894',
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
  }, [month, year]);

  return (
    <div>
      <h1 className="mx-auto mt-14 w-[150px] text-xl font-semibold capitalize ">ORDER CHART</h1>
      <div className="mx-auto my-auto flex w-[1100px] bg-slate-50">
        <div className="my-auto h-fit w-full rounded-xl  border border-gray-400 pt-0  shadow-xl">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default ChartOrder;
