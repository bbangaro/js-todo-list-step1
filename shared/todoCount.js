
export const todoCount = (todoLength) => {
    const countAll = document.querySelectorAll('.todo-list > li').length;
    const countHidden = document.querySelectorAll('.todo-list > li[class="hidden"]').length;
    const countCompletedHidden = document.querySelectorAll('.todo-list > li[class="completed hidden"]').length;

    
    todoLength.innerHTML = countAll - countHidden - countCompletedHidden;
};