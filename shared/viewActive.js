const todoLength = document.querySelector('strong');

export const viewActive = (e) => {
    const $selected = event.target.closest('a');
    //resetScreen();
    
    $selected.classList = 'selected'

    document.querySelectorAll('.todo-list > li').forEach((li) => {
        li.classList.remove('hidden');

        if(li.className === 'completed') {
            li.className = 'completed hidden';
        }
    });
    todoCount(todoLength);
    //resetScreen();
};