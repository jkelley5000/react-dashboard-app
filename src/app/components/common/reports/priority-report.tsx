import { TaskModel } from '@/app/models/task-model';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export default function PriorityReport({ taskData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Tasks By Priority',
            },
        },
    };
    let datasetDataCounts = [0, 0, 0];
    taskData.taskData.forEach((task: TaskModel) => {
        if (task.priority === 'low') {
            datasetDataCounts[0]++;
        }
        if (task.priority === 'medium') {
            datasetDataCounts[1]++;
        }
        if (task.priority === 'high') {
            datasetDataCounts[2]++;
        }
    });
    const data = {
        labels: ['Low', 'Medium', 'High'],
        datasets: [
            {
                label: 'Tasks By Priority',
                data: datasetDataCounts,
                backgroundColor: [
                    '#e22ba3',
                    '#952be2',
                    '#2bb5e2'
                ],
                borderColor: [
                    '#e22ba3',
                    '#952be2',
                    '#2bb5e2'
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <main className="report-container w-1/3 mt-10 ml-5 p-3 border-2 border-gray-300 rounded-md">
            <Doughnut options={options} data={data} />
        </main>
    )
}