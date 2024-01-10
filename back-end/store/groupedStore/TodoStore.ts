/*eslint-disable */

import AppStore from "../AppStore";
import TaskStore from "../individualStore/TaskStore";


export default class TodoStore {
    task: TaskStore;

    constructor(store: AppStore) {
        this.task = new TaskStore(store);
    }
}
