/* eslint-disable */
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ITask} from '../../ITask';
import {TaskListStyles} from './TaskListStyle';
import {useAppContext} from '../../Context';

interface IProp {
  task: ITask;
}

export const TaskList = ({task}: IProp) => {
  const {api} = useAppContext();
  const [loading, setLoading] = useState(false);

  const DeleteTask = async (id: string) => {
    try {
      setLoading(true);
      await api.todo.task.delete(id);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {loading ? (
        <Text>Deleting...</Text>
      ) : (
        <>
          <Text style={TaskListStyles.Title}>{task.TaskName}</Text>
          <TouchableOpacity onPress={() => DeleteTask(task.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
