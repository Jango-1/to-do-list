export default function createTodo(
    title,
    description = '',
    dueDate = '',
    priority = 'low',
    notes = '',
) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        completed: false,
        toggle() {
            this.completed = !this.completed;
        },
    };
}