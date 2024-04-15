export async function GetTasks() {
    const response = fetch('http://localhost:3000/tasks/all');
    const data = (await response).json();

    return data;
}