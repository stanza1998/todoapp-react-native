/* eslint-disable */
import TodoStore from "./groupedStore/TodoStore";

export default class AppStore {
    todo = new TodoStore(this);
}
