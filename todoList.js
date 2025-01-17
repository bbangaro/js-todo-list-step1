//todo list에 todoItem을 키보드로 입력하여 추가하기 (완료)
//todo list의 체크박스를 클릭하여 complete 상태로 변경. (li tag 에 completed class 추가, input 태그에 checked 속성 추가) (완료)
//todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제 (완료)
//todo list를 더블클릭했을 때 input 모드로 변경. (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
//todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기 (완료)
//todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기 (완료)

import { onkeypressHandler } from './todoEvent/onkeypressHandler.js';
import { onClickHandler } from './todoEvent/onClickHandler.js';
import { onDoubleClickHandler } from './todoEvent/onDoubleClickHandler.js';

(function () {
const todoRoot = document.querySelector('.todoapp')
const todoList = document.getElementById('todo-list')
const todoInput = document.getElementById('new-todo-title');


todoInput.addEventListener('keypress', onkeypressHandler);
todoRoot.addEventListener('click', onClickHandler);
todoList.addEventListener('dblclick', onDoubleClickHandler);
})();

/*
resetScreen = () => {
    document.querySelectorAll('a').forEach((a) => a.classList.remove('selected'));
    $selectedAll.forEach(button => {
        button.classList.remove('selected');
    })
};
*/

