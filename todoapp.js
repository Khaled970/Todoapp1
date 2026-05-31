import readline from "readline";
// Store todos in memory (array)
let todos = [];
// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Add a new todo
const addTodo = () => {
    rl.question("Enter task: ", (text) => {
        if (text.trim() === "") {
            console.log("Task cannot be empty!\n");
        }
        else {
            const newTodo = {
                id: Date.now(),
                text: text.trim(),
            };
            todos.push(newTodo);
            console.log("✓ Task added successfully!\n");
        }
        showMenu();
    });
};
// List all todos
const listTodos = () => {
    console.clear();
    console.log("\n=== Todo List App ===");
    console.log("Commands: add, list, update, remove, exit\n");
    if (todos.length === 0) {
        console.log("No todos yet!\n");
    }
    else {
        console.log("Your Todos:");
        todos.forEach((todo) => {
            console.log(`${todo.id}. ${todo.text}`);
        });
        console.log("");
    }
    process.stdout.write("> ");
    rl.question("", (command) => {
        handleCommand(command);
    });
};
// NEW: Update a todo
const updateTodo = () => {
    rl.question("Enter task ID to update: ", (input) => {
        const id = parseInt(input);
        // Find todo by ID
        const todo = todos.find((todo) => todo.id === id);
        if (!todo) {
            console.log("Task not found!\n");
            showMenu();
            return;
        }
        // Ask for updated text
        rl.question("Enter new task text: ", (newText) => {
            if (newText.trim() === "") {
                console.log("Task cannot be empty!\n");
            }
            else {
                // Update todo text
                todo.text = newText.trim();
                console.log("✓ Task updated successfully!\n");
            }
            showMenu();
        });
    });
};
// Remove a todo
const removeTodo = () => {
    rl.question("Enter task ID to remove: ", (input) => {
        const id = parseInt(input);
        // Use filter to create new array without the todo
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        if (updatedTodos.length === todos.length) {
            console.log("Task not found!\n");
        }
        else {
            todos = updatedTodos;
            console.log("Task removed successfully!\n");
        }
        showMenu();
    });
};
// Handle command logic
const handleCommand = (command) => {
    switch (command.trim().toLowerCase()) {
        case "add":
            addTodo();
            break;
        case "list":
            listTodos();
            break;
        case "update":
            updateTodo();
            break;
        case "remove":
            removeTodo();
            break;
        case "exit":
            console.log("Goodbye!");
            rl.close();
            break;
        default:
            console.log("Unknown command\n");
            showMenu();
    }
};
// Show menu and handle commands
const showMenu = () => {
    console.clear();
    console.log("\n=== Todo List App ===");
    console.log("Commands: add, list, update, remove, exit\n");
    process.stdout.write("> ");
    rl.question("", (command) => {
        handleCommand(command);
    });
};
// Start the app
console.log("\n=== Todo List App ===");
console.log("Commands: add, list, update, remove, exit\n");
showMenu();
//# sourceMappingURL=todoapp.js.map