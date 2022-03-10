import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

import {styles} from './styles';
import TrashAsset from '../assets/trash.png';
import CheckAsset from '../assets/check.png';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleonChangeInput = value => {
    setText(value);
  };
  const addItem = () => {
    if (text !== '') {
      setTextList([...textList, {id: textList.length + 1, value: text}]);
      setText('');
    }
  };
  const handleDeleteItem = id => {
    const newlist = textList.filter(item => item.id !== id);
    setSelectedItem({});
    setTextList(newlist);
    setModalVisible(!modalVisible);
  };
  const onHandleModal = id => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };
  const onHandleConfirm = id => {
    setTextList(
      textList.map(item => (item.id === id ? {...item, done: true} : item)),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Type here"
          autoCorrect={false}
          autoFocus={true}
          placeholderTextColor="#7878ff"
          style={styles.TextInput}
          value={text}
          onChangeText={handleonChangeInput}
        />
        <Button title="Add" color="#7878ff" onPress={() => addItem()} />
      </View>
      <View style={styles.containerList}>
        <Text>ToDo</Text>
        <FlatList
          data={textList.filter(item => !item.done)}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.textList}>{item.value}</Text>
              <View style={styles.itemButtonsContainer}>
                <TouchableOpacity onPress={() => onHandleModal(item.id)}>
                  <Image source={TrashAsset} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onHandleConfirm(item.id)}>
                  <Image source={CheckAsset} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
        <Text>Completados</Text>
        <FlatList
          data={textList.filter(item => item.done)}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.textList}>{item.value}</Text>
              <View style={styles.itemButtonsContainer}>
                <TouchableOpacity onPress={() => onHandleModal(item.id)}>
                  <Image source={TrashAsset} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <Modal animationType="slide" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainerContent}>
          <View style={styles.modalTitle}>
            <Text>Description</Text>
          </View>
          <View style={styles.modalContent}>
            <Text>Do you want to delete this item?</Text>
            <Text style={styles.modalContentText}>{selectedItem.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <View style={styles.buttonContainer}>
              <Button
                title="yes"
                color="#7878ff"
                onPress={() => handleDeleteItem(selectedItem.id)}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="no"
                color="#7878ff"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default App;
