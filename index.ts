import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get(url).then(res => {

    const { id, title, completed } = res.data as Todo;
    logTodo(id, title, completed);

    
});

const logTodo = (id: number, title: string, completed: boolean) => {

    const todoInfo = `
        Todo id: ${id}
        Todo Title: ${title}
        Todo Status: ${completed ? 'completed' : 'pending'} 
    `;
    
    console.log(todoInfo);
};