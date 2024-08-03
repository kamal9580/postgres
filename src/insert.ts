//first way

// import { Client } from 'pg';

// // Async function to insert data into a table
// async function insertData() {
//   const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'mysecretpassword',
//   });

//   try {
//     await client.connect(); // Ensure client connection is established
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
//     const res = await client.query(insertQuery);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// insertData();

//2nd way  more optimum way


import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username: string, email: string, password: string) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    await client.connect(); // Ensure client connection is established
    // Use parameterized query to prevent SQL injection basically sql injection ek tarah se check karta hai ki userbame ke ya jo
    //bhi field ham diye hai wo shi input user de rha hai ye validation provide karta hai
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData('username5', 'user5@example.com', 'user_password').catch(console.error);