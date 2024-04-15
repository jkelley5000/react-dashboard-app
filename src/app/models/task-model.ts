export interface TaskModel {
    id: number;
    task_name: string;
    task_description: string;
    assignee_name: string;
    assignee_email: string;
    team: string;
    due_date: string;
    date_completed: string;
    priority: string;
    status: string;
}