import React, { useState } from 'react';
import { TextInput, View, Button, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './style';

const Goal = () => {

  const [goalName, setGoalNeme] = useState('');
  const [goalList, setGoalList] = useState([]);
  const [visible, setVisible] = useState(false)

  /**
   * Handle text input change
   * @param goalName
   */
  const handleChange = (goalName) => setGoalNeme(goalName)

  /**
   * Handle add button
   */
  const onAdd = () => {
    setGoalList([...goalList,{ id: Math.random().toString(), goalName}]);
    setGoalNeme('');
    setVisible(false)
  }

  /**
   * Delete goal items from list based on index
   * @param index 
   */
  const deleteItem = (index) => {
    goalList.splice(index, 1);
    setGoalList([...goalList]);
  }

  return (
    <View style={styles.container}>
      <Button title="Open Add goal" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="slide">
        <View style={styles.itemViewer}>
          <TextInput 
            value={goalName}
            placeholder="Enter your goal..." 
            style={styles.inputBox}
            onChangeText={handleChange}
          />
          <View style={styles.buttonWrapper}>
            <View style={styles.button}><Button title="add" onPress={onAdd} /></View>
            <View style={styles.button}><Button title="Cancel" color="red" onPress={() => setVisible(false)} /></View>
          </View>
        </View>
      </Modal> 
      <FlatList
        keyExtractor={key => key.id} 
        data={goalList} 
        renderItem={renderGoals => 
          <TouchableOpacity activeOpacity={0.4} onPress={() => deleteItem(renderGoals.index)}>
            <View style={styles.listItem}>
              <Text> {renderGoals.item.goalName} </Text>
            </View>
          </TouchableOpacity>
        } 
       />
      </View>
  );
}

export default Goal;
