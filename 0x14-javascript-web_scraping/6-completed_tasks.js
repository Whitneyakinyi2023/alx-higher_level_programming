#!/usr/bin/node


const request = require('request');

const url = process.argv[2] || 'https://jsonplaceholder.typicode.com/todos'; // Handle missing URL

request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    const todos = JSON.parse(body);

    // Initialize empty object to store counts
    const completedPerUser = {};

    todos.forEach((todo) => {
        if (todo.completed) {
            // Increment count for completed tasks by user ID
            completedPerUser[todo.userId] = (completedPerUser[todo.userId] || 0) + 1;
        }
    });

    // Print results only for users with completed tasks
    if (Object.keys(completedPerUser).length > 0) {
        console.log(completedPerUser);
    } else {
        console.log('No users have completed tasks');
    }
});
