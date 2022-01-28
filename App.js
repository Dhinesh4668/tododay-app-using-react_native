import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import Task from './components/task';

export default function App() {
  const [task, setTask] =useState();
  const [taskItems, setTaskItems] = useState ([]);

  const handleAddTask = () =>  {
    
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.setionTitle}>Today's Task</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={ ()=> completeTask (index)}>
                  <Task text={item}/> 
                </TouchableOpacity>
              ) 
              
            })
          }
          
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "" }
        style={styles.writeTaskWapper}>
          <TextInput style={styles.input} placeholder={'Write your task.....'} value={task} onChangeText={text => setTask(text) }/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  setionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,

  },
  writeTaskWapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 66,
    borderWidth: 0.01,
    width: 250,
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.01,

  },
  addText:{
    

  },
});
