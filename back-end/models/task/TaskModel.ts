/* eslint-disable */

import { makeAutoObservable, toJS } from "mobx";
import AppStore from "../../store/AppStore";

export const defaultTask: ITask = {
    id: "",
    TaskName: ""
};

export interface ITask {
    id: string;
    TaskName: string;

}

export default class TaskModel {
    private task: ITask;

    constructor(private store: AppStore, task: ITask) {
        makeAutoObservable(this);
        this.task = task;
    }

    get asJson(): ITask {
        return toJS(this.task);
    }
}
