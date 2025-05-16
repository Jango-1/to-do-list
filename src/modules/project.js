export default function createProjectFolder(
    projectId = '',
    title = '',
    todoList = [],
) {
    return {
        projectId,
        title,
        todoList,
        addTodo(todo) {
            this.todoList.push(todo);
        },
        removeTodo(todo) {
            const index = this.todoList.indexOf(todo);
            if (index > -1) {
                this.todoList.splice(index, 1);
            }
        },
    };
}