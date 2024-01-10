import React, {useEffect} from 'react';
import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AppStore from './back-end/store/AppStore';
import AppApi from './back-end/apis/AppApi';
import {AppContext} from './Context';
// import Main from './Main';
// import {Sandbox} from './Sandbox';
import Main from './Main';

const App = () => {
  const store = new AppStore();
  // const ui = new UiStore();
  const api = new AppApi(store);

  const tasks = store.todo.task.all.map(task => {
    return task.asJson;
  });

  useEffect(() => {
    const getData = async () => {
      await api.todo.task.getAll();
    };
    getData();
  }, [api.todo]);

  console.log(tasks);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View>
        <AppContext.Provider value={{store, api}}>
          <Main />
        </AppContext.Provider>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
