// タスク管理ツールのスクリプト

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防ぐ

    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert('タスクを入力してください。');
        return;
    }

    addTask(taskName);
    taskInput.value = ""; // 入力フィールドをクリア
});

function addTask(task) {
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
}
