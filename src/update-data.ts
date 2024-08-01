import { getClient } from "./utils";

async function updateTodo(todoId: number) {
    const client = await getClient();
    
    const updateTodoText = 'UPDATE todos SET done = $1 WHERE id = $2';
    await client.query(updateTodoText, [true, todoId]);

    // true will replace the first placeholder ($1) in the query, setting the completed field to true.
    
    console.log(`Todo with ID ${todoId} updated to done!`);
}

const todoIdToUpdate = 1;
updateTodo(todoIdToUpdate);
