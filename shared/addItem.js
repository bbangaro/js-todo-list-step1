const ul = document.getElementById('todo-list')
const todoInput = document.getElementById('new-todo-title');

export const addItem = (e, todoTitle) => {
    ul.insertAdjacentHTML("beforeend", renderTodoItemTemplate(todoTitle));
        todoInput.value = '';
}

function renderTodoItemTemplate(title) {
    return ` <li>
                    <div class="view">
                        <input class="toggle" type="checkbox">
                        <label class="label">${title}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="">
                </li>`;
  }
