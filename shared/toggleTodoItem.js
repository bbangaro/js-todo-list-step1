
export const toggleTodoItem = (e) => {
    const $inputChecked = e.target.checked;
    const $todoItem = e.target.closest('li');
    
    $todoItem.classList.toggle("completed");
       
        if ($inputChecked === true) {
            e.target.setAttribute('checked','checked');
        } else if ($inputChecked === false) {
            e.target.removeAttribute('checked');
        }
}