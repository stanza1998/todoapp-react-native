/* eslint-disable */

import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {AppBar} from './components/app-bar/AppBar';
import {TaskList} from './components/home/TaskList';
import {TaskListStyles} from './components/home/TaskListStyle';
import {AddTask} from './components/home/AddTask';
import {AppContext, useAppContext} from './Context';
import {observer} from 'mobx-react-lite';

const Main = observer(() => {
  const {api, store} = useAppContext();

  const tasks = store.todo.task.all.map(task => {
    return task.asJson;
  });

  useEffect(() => {
    const getData = async () => {
      await api.todo.task.getAll();
    };
    getData();
  }, []);

  return (
    <AppContext.Provider value={{store, api}}>
      <View style={styles.container}>
        <AppBar />
        <View style={styles.content}>
          <AddTask />
          <View style={styles.list}>
            <ScrollView>
              {tasks.map(item => (
                <TaskList key={item.id} task={item} />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </AppContext.Provider>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 40,
    // backgroundColor: 'red',
  },
  list: {
    marginTop: 20,
    // backgroundColor: 'yellow',
    maxHeight: 400,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default Main;
