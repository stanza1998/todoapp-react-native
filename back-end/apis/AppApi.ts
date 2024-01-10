/* eslint-disable */

import AppStore from "../store/AppStore";
import TodoApi from "./groupedapis/Todos";

export default class AppApi {
    todo: TodoApi;
    // settings
    constructor(private store: AppStore) {
        this.todo = new TodoApi(this, this.store)
    }
}
