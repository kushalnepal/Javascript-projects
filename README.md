# To-Do List Application

This is a simple **To-Do List Application** built using **HTML**, **CSS**, and **JavaScript**. The application allows users to manage their tasks effectively with the following features: **Create, Read, Update, and Delete (CRUD)** operations. It uses the browser's `localStorage` to persist data.

---

## Features

1. **Create a Task**
   - Users can add a new task by typing into the input box and clicking the "Enter" button.
   - The task is added to the list and stored in `localStorage` to ensure it persists even after the page is refreshed.

2. **Read Tasks**
   - Tasks stored in `localStorage` are automatically retrieved and displayed whenever the page loads.
   - Each task is shown in a list with options to edit or delete.

3. **Update a Task**
   - Users can edit a task by clicking the pencil icon ✏️ (Edit Button).
   - When editing is enabled, a "Save" button and "Cancel" button appear:
     - **Save**: Updates the task and reflects the changes in the list and `localStorage`.
     - **Cancel**: Discards the changes and restores the original task.

4. **Delete a Task**
   - Users can remove a task by clicking the trash icon ✅ (Delete Button).
   - The task is deleted from the list and removed from `localStorage`.

5. **Date Display**
   - The current date is displayed dynamically at the top of the app.

---

## Code Explanation

### **1. Data Handling**
- All tasks are stored in an array called `itemsArray`.
- The array is synced with `localStorage` to ensure data persistence.
- On every update (create, edit, delete), the `localStorage` is updated with the new `itemsArray`.

### **2. Event Listeners**
- **Add Task**: Listens to the "Enter" button click and calls the `createItems` function to add a task.
- **Edit Task**: Toggles the task into editable mode, enabling the user to modify it.
- **Delete Task**: Removes a task from both the list and `localStorage`.
- **Save/Cancel Task**: Handles user decisions to save or discard changes while editing a task.

### **3. Functions**
- `createItems(items)`: Adds a new task to the `itemsArray` and updates `localStorage`.
- `displayArray()`: Renders the tasks from `itemsArray` onto the webpage. This function also attaches event listeners for **Edit**, **Delete**, **Save**, and **Cancel** actions.
- `updateitems(text, i)`: Updates the value of a task in the array and saves it to `localStorage`.
- `deleteitems(i)`: Removes a task from the array and updates `localStorage`.
- `displayDate()`: Displays the current date in a readable format.

---

## Technologies Used
- **HTML**: For the structure of the application.
- **CSS**: For styling and layout.
- **JavaScript**: For implementing CRUD functionality and user interactions.
- **Font Awesome**: For task control icons (Edit, Delete, Save, Cancel).

---

## How to Use
1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Add tasks by typing in the input box and clicking "Enter."
4. Manage tasks using the Edit, Delete, Save, and Cancel buttons.

