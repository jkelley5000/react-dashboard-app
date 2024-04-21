'use client';

import { GetTasks } from "../api/route";
import { use } from "react";
import StatusReport from "./common/reports/status-report";
import PriorityReport from "./common/reports/priority-report";

export default function Dashboard() {
    const taskData = use(GetTasks());

    return (
        <div className="flex">
            <StatusReport taskData={{ taskData }} />
            <PriorityReport taskData={{ taskData }} />
        </div>
    )
}