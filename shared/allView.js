const todoLength = document.querySelector('strong');

export const allView = (e) => {
    const $selected = target.closest('a');
    //console.log(target.closest('a'));
    //resetScreen();
    
    $selected.classList = 'selected'

    document.querySelectorAll('.todo-list > li').forEach((li) => {
        li.classList.remove('hidden');
        document.querySelectorAll('a')[0].className = 'selected';
    });
    todoCount(todoLength);
};