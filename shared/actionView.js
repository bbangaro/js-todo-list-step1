import { allView } from '../shared/allView.js';
import { viewActive } from '../shared/viewActive.js'
import { completedActive } from '../shared/completedActive.js'

export const actionView = (e) => {
    console.log(e);
    if (e.target.className === 'all') {
        allView(e);
    }
    if (e.target.className === 'active') {
        viewActive(e);
    }
    if (e.target.className === 'completed') {
        completedActive(e);
    }
}