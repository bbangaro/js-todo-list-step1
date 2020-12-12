
import { editItem } from'../shared/editItem.js'

export const onDoubleClickHandler = (e) => {
    const $targetClassName = e.target.className;
    const $todoItem = e.target.closest('li');
    
    if ($targetClassName === 'label') { 
      editItem($todoItem);
    }
}
