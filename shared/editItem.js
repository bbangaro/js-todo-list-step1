
export const editItem = ($todoItem) => {
    $todoItem.classList.toggle("editing");

    $todoItem.addEventListener('keyup', inputEdit);

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