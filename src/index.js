import './styles.css';
import createTodo from './modules/todo';
import createProject from './modules/project';

const todos = [];

const milk = createTodo('Buy milk', 'I need 2% milk from the market', '2025-06-02', 'high', 'Get it from the store');

todos.push(milk);

const gym = createTodo('Go to the gym', 'I need to work out', '2025-06-03', 'medium', 'Get it from the gym');
todos.push(gym);

console.log('My todos:', todos);
milk.toggle();
console.log('My todos after toggling milk:', todos);

const project1 = createProject('Project 1', 'This is my first project');
project1.addTodo(milk);
project1.addTodo(gym);
console.log('Project 1 todos:', project1.todoList);

