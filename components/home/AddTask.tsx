/* eslint-disable */

import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button, Alert} from 'react-native';
import {ITask, defaultTask} from '../../back-end/models/task/TaskModel';
import {useAppContext} from '../../Context';

export const AddTask = observer(() => {
  const {api} = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<ITask>({...defaultTask});

  const createTask = async () => {
    const _task: ITask = {
      id: '',
      TaskName: task.TaskName,
    };

    if (task.TaskName.length > 3) {
      try {
        setIsLoading(true);
        await api.todo.task.create(_task);
        // setTask({...defaultTask});

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('OOPS!', 'Todo must be at least 4 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <View>
      <Text>Task Name</Text>
      <TextInput
        style={styles.input}
        value={task.TaskName}
        onChangeText={e =>
          setTask({
            ...task,
            TaskName: e,
          })
        }
      />
      <Button
        onPress={createTask}
        title={isLoading ? 'Adding Task...' : 'Add Task'}
        color="blue"
        accessibilityLabel="Learn more about this purple button"
        disabled={isLoading} // Disable the button while loading
      />
    </View>
  );
});

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'blue',
  },
});
