/* eslint-disable */

import { Unsubscribe, collection, deleteDoc, doc, getDoc, onSnapshot, query, setDoc, updateDoc } from "firebase/firestore";
import AppStore from "../../store/AppStore";
import AppApi from "../AppApi";
import { db } from "../../../firebaseConfig";
import { ITask } from "../../../ITask";



export default class TaskApi {
    constructor(private api: AppApi, private store: AppStore) { }

    async getAll() {
        const myPath = `Todos`;

        const $query = query(collection(db, myPath));
        // new promise
        return await new Promise<Unsubscribe>((resolve, reject) => {
            // on snapshot
            const unsubscribe = onSnapshot(
                $query,
                // onNext
                (querySnapshot) => {
                    const items: ITask[] = [];
                    querySnapshot.forEach((doc) => {
                        items.push({ id: doc.id, ...doc.data() } as ITask);
                    });

                    this.store.todo.task.load(items);
                    resolve(unsubscribe);
                },
                // onError
                (error) => {
                    reject();
                }
            );
        });
    }

    async getById(id: string) {
        const myPath = `Todos`;

        const unsubscribe = onSnapshot(doc(db, myPath, id), (doc) => {
            if (!doc.exists) return;
            const item = { id: doc.id, ...doc.data() } as ITask;

            this.store.todo.task.load([item]);
        });

        return unsubscribe;
    }

    async create(item: ITask) {
        const myPath = `Todos`;

        const itemRef = doc(collection(db, myPath));
        item.id = itemRef.id;

        // create in db
        try {
            await setDoc(itemRef, item, {
                merge: true,
            });
            // create in store
            this.store.todo.task.load([item]);
        } catch (error) {
            // console.log(error);
        }
    }

    async update(custom_contact: ITask) {
        const myPath = `Todos`;
        try {
            await updateDoc(doc(db, myPath, custom_contact.id), {
                ...custom_contact,
            });

            this.store.todo.task.load([custom_contact]);
        } catch (error) { }
    }

    async updateById(custom_contact: string, newStatus: string) {
        const myPath = `Todos`;

        try {
            // Get the current document data before the update
            const docSnapshot = await getDoc(doc(db, myPath, custom_contact));

            await updateDoc(doc(db, myPath, custom_contact), {
                // your update data here
                status: newStatus
            });

            const updatedDocSnapshot = await getDoc(doc(db, myPath, custom_contact));
            const updatedData = updatedDocSnapshot.data();
            console.log('Updated Data:', updatedData);
        } catch (error) {
            console.error('Error updating document:', error);
        }
    }

    async delete(id: string) {
        const myPath = `Todos`;
        try {
            await deleteDoc(doc(db, myPath, id));
            this.store.todo.task.remove(id);
        } catch (error) {
            console.log(error);
        }
    }
}
