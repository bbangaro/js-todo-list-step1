import { todoCount } from'../shared/todoCount.js'
import { addItem } from'../shared/addItem.js';

const todoLength = document.querySelector('strong');

export const onkeypressHandler = (e) => {
    const todoTitle = e.target.value;
   
    if (e.key === 'Enter' && todoTitle !== "") {
        addItem(e, todoTitle);
    }  
    todoCount(todoLength);
}

