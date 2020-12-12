import { todoCount } from'../shared/todoCount.js'

import { toggleTodoItem } from '../shared/toggleTodoItem.js';

const todoLength = document.querySelector('strong');
const ul = document.getElementById('todo-list')
const $selectedAll = document.querySelectorAll('.filters > a');

/*resetScreen = () => {
    //document.querySelectorAll('a').forEach((a) => a.classList.remove('selected'));
    $selectedAll.forEach(button => {
        button.classList.remove('selected');
    })
};*/


export const onClickHandler = (e) => {
    const $targetClassName = e.target.className;
    const $inputChecked = e.target.checked;
    const $todoItem = e.target.closest('li');

    if (e.target.tagName === 'a') {
      actionView(e);
    }

    // 클래스,속성 추가
    if ($targetClassName === 'toggle') {       
        toggleTodoItem(e);
    }

    // 삭제
    if ($targetClassName === 'destroy') {
        ul.removeChild(e.target.closest("li"))
        todoCount(todoLength);
    }
}

