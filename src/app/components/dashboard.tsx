'use client';

import { GetTasks } from "../api/route";
import { use } from "react";
import StatusReport from "./common/reports/status-report";

export default function Dashboard() {
    const taskData = use(GetTasks());

    return (
        <div>
            <StatusReport taskData={{ taskData }} />
        </div>
    )
}