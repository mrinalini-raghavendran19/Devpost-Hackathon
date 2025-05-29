import React, { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js';
import { useQuery } from 'react-query';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title);

const fetchLessonsData = async ({ queryKey }) => {
  const [_key, { projects, dateRange }] = queryKey;
  const res = await axios.get('/api/lessons', {
    params: { projects, start: dateRange.start, end: dateRange.end },
  });
  return res.data;
};

const LessonsBarChart = () => {
  const [selectedProjects, setSelectedProjects] = useState(['ALL']);
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  const { data, isLoading } = useQuery(
    ['lessonsData', { projects: selectedProjects, dateRange }],
    fetchLessonsData,
    { keepPreviousData: true, staleTime: 5000 }
  );

  const chartData = useMemo(() => {
    if (!data) return {};

    return {
      labels: data.projects.map(p => p.name),
      datasets: [
        {
          label: 'Lessons Learnt',
          data: data.projects.map(p => p.lessonsCount),
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
        },
      ],
    };
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: () => 'Click to view the Tags',
        },
      },
    },
    onClick: (e, elements) => {
      if (elements.length > 0 && data) {
        const index = elements[0].index;
        const projectId = data.projects[index].id;
        window.location.href = `/projects/${projectId}/issues`;
      }
    },
  };

  if (isLoading) return <p>Loading chart...</p>;

  return (
    <div role="region" aria-label="Lessons Learnt Bar Chart" className="w-full p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4 items-center justify-between">
        <select
          multiple
          aria-label="Select Projects"
          onChange={e =>
            setSelectedProjects([...e.target.selectedOptions].map(o => o.value))
          }
          className="border p-2 rounded"
        >
          <option value="ALL">ALL</option>
          {/* Replace with actual project options */}
          <option value="proj1">Project 1</option>
          <option value="proj2">Project 2</option>
        </select>

        <div className="flex gap-2 items-center">
          <label htmlFor="start">From:</label>
          <DatePicker
            id="start"
            selected={dateRange.start}
            onChange={date => setDateRange(prev => ({ ...prev, start: date }))}
            selectsStart
            startDate={dateRange.start}
            endDate={dateRange.end}
            className="border p-2 rounded"
          />
          <label htmlFor="end">To:</label>
          <DatePicker
            id="end"
            selected={dateRange.end}
            onChange={date => setDateRange(prev => ({ ...prev, end: date }))}
            selectsEnd
            startDate={dateRange.start}
            endDate={dateRange.end}
            className="border p-2 rounded"
          />
        </div>
      </div>

      <Bar data={chartData} options={options} aria-hidden="false" />

      <div className="flex justify-between mt-2 text-center">
        {data.projects.map((p, idx) => (
          <div key={p.id} style={{ width: `${100 / data.projects.length}%` }}>
            <span
              className={`text-sm ${
                p.trend >= 0 ? 'text-green-600' : 'text-red-600'
              }`}
              aria-label={`Trend: ${p.trend}%`}
            >
              {p.trend >= 0 ? '+' : ''}
              {p.trend}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsBarChart;
