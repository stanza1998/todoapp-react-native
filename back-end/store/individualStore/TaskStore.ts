/* eslint-disable */

import { runInAction } from "mobx";
import Store from "../Store";
import { ITask } from "../../../ITask";
import TaskModel from "../../models/task/TaskModel";
import AppStore from "../AppStore";

export default class TaskStore extends Store<
    ITask,
    TaskModel
> {
    items = new Map<string, TaskModel>();

    constructor(store: AppStore) {
        super(store);
        this.store = store;
    }

    load(items: ITask[] = []) {
        runInAction(() => {
            items.forEach((item) =>
                this.items.set(item.id, new TaskModel(this.store, item))
            );
        });
    }
}
