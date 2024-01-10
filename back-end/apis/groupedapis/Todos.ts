/* eslint-disable */

import AppStore from "../../store/AppStore";
import AppApi from "../AppApi";
import TaskApi from "../individualapis/TaskApi";

export default class TodoApi {
    task: TaskApi;

    constructor(api: AppApi, store: AppStore) {
        this.task = new TaskApi(api, store);
    }
}