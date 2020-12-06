//todo list에 todoItem을 키보드로 입력하여 추가하기 (완료)
//todo list의 체크박스를 클릭하여 complete 상태로 변경. (li tag 에 completed class 추가, input 태그에 checked 속성 추가) (완료)
//todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제 (완료)
//todo list를 더블클릭했을 때 input 모드로 변경. (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
//                                                                                                              esc가 안 먹히는데 ..
//todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기 (완료)
//todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기 (완료)


const ul = document.getElementById('todo-list')
const sectionId = document.getElementById('content');
const todoInput = document.getElementById('new-todo-title');
const todoLength = document.querySelector('strong');

todoInput.addEventListener('keypress', onkeypressHandler);

//인풋창 입력
function onkeypressHandler(e) {
    const todoTitle = e.target.value;

    if (e.key === 'Enter' && e.target.value !== "") {
        
        ul.insertAdjacentHTML("beforeend", renderTodoItemTemplate(todoTitle));
        todoInput.value = '';

        ul.addEventListener('click', onClickHandler);
        ul.addEventListener('dblclick', onDoubleClickHandler);

    }  
    todoCount();
}

//클릭
function onClickHandler(e) {
    const $targetClassName = e.target.className;
    const $inputChecked = e.target.checked;
    const $todoItem = e.target.closest('li');

    // 클래스,속성 추가
    if ($targetClassName === 'toggle') {       
        $todoItem.classList.toggle("completed");
       
        if ($inputChecked === true) {
            e.target.setAttribute('checked','checked');
        } else if ($inputChecked === false) {
            e.target.removeAttribute('checked');
        }
    }

    // 삭제
    if ($targetClassName === 'destroy') {
        ul.removeChild(e.target.closest("li"))
        todoCount();
    }

}


//더블클릭
function onDoubleClickHandler(e) {
    const $targetClassName = e.target.className;
    const $todoItem = e.target.closest('li');
    
    if ($targetClassName === 'label') { 
        $todoItem.classList.toggle("editing");

        $todoItem.addEventListener('keyup', inputEdit);
    }
    
}

//인풋창 수정
function inputEdit(e) {
    const $todoItem = e.target.closest('li');

    if (e.key == 'Escape') {
      $todoItem.removeAttribute('class');
    }
    if (e.key === 'Enter') {
      $todoItem.removeAttribute('class');
      $todoItem.querySelector('label').innerHTML = e.target.value;
    }
}

//전체 보기
allView = () => {
    document.querySelectorAll('.todo-list > li').forEach((li) => {
        li.classList.remove('hidden');
    });
    todoCount();

}

//안 끝낸 일 보기
viewActive = () => {
    document.querySelectorAll('.todo-list > li').forEach((li) => {
        li.classList.remove('hidden');

        if(li.className === 'completed') {
            li.className = 'completed hidden';
        }
    });
    todoCount();

}

//완료 한 일 보기
completedActive = () => {
    document.querySelectorAll('.todo-list > li').forEach((li) => {
        li.classList.remove('hidden');
        
        if (li.className === '') {
            li.className = 'hidden';
        }
      });
      todoCount();
}

function todoCount() {
    const count = document.querySelectorAll('.todo-list > li')
    if (count.className !== 'hidden'){
     todoLength.innerHTML = count.length;
    }
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
