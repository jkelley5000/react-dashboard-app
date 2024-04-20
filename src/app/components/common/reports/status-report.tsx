import { TaskModel } from "@/app/models/task-model";
import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    Legend,
    Title,
    LinearScale,
    CategoryScale
} from "chart.js";
import { AppProps } from "next/app";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    Tooltip,
    Legend,
    Title,
    LinearScale,
    CategoryScale
);

export default function StatusReport({ taskData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Tasks by Status',
            },
        },
    };
    const labels = ['On Track', 'At Risk', 'Off Track', 'Complete'];
    let datasetDataCounts = [0, 0, 0, 0];
    taskData.taskData.forEach((task: TaskModel) => {
        if (task.status === 'on track') {
            datasetDataCounts[0]++;
        }
        if (task.status === 'at risk') {
            datasetDataCounts[1]++;
        }
        if (task.status === 'off track') {
            datasetDataCounts[2]++;
        }
        if (task.status === 'complete') {
            datasetDataCounts[3]++;
        }
    });
    let data = {
        labels,
        datasets: [
            {
                label: 'Tasks',
                data: datasetDataCounts,
                backgroundColor: '#e22ba3',
            },
        ],
    };

    return (
        <main className="report-container w-1/2 mt-10 ml-5 p-3 border-2 border-gray-300 rounded-md">
            <Bar options={options} data={data} />
        </main>
    )
}