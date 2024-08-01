import { getClient } from "../utils";

// Get all todos for a give user
// This needs to ensure that every user comes atleast once
async function getUserAndTodosWithJoin(userId: number) {
    const client = await getClient();

    const joinQuery = `
        SELECT users.*, todos.title, todos.description, todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1;
    `;
    //iska mtlab hai ki users se sara aur todos se title,description,done jha ki 
    //users.id = todos.user_id aur jiska user id 1 hai .
    //mtlab user id one ka ka todos me find jiska user id one hai 

    const res = await client.query(joinQuery, [userId]);
    const results = res.rows;

    console.log("User and Todos:", results);
}

getUserAndTodosWithJoin(1)