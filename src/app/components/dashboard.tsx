'use client';

import ReportContainer from "./common/report-container";
import { GetTasks } from "../api/route";
import { use } from "react";

export default function Dashboard() {
    const taskData = use(GetTasks());

    return (
        <div>
            <ReportContainer taskData={{ taskData }} />
        </div>
    )
}