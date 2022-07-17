import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';
const icon = require('../../assets/success1.png');

const CopiesTable = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Copies details will be displaye here
            </Text>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TableView>
        <Section header="RECENT COPIES" footer="">
          <Cell
            cellStyle="RightDetail"
            title="Last Week"
            detail="23 Copies"
            accessory="DisclosureIndicator"
            onPress={() => setModalVisible(true)}
          />
          <Cell
            cellStyle="RightDetail"
            title="Last Month"
            detail="124 Copies"
            accessory="DisclosureIndicator"
            onPress={() => setModalVisible(true)}
          />
          <Cell
            cellStyle="RightDetail"
            title="Last 3 months"
            detail="987 Copies"
            accessory="DisclosureIndicator"
            onPress={() => setModalVisible(true)}
          />
        </Section>
      </TableView>
      <View>
        <TableView>
          <Section footer="All rights reserved.">
            <Cell
              title="Help / FAQ"
              titleTextColor="#1973cb"
              onPress={() => console.log('open Help/FAQ')}
            />
          </Section>
        </TableView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 15,
    height: 15,
  },
  stage: {
    backgroundColor: '#EFEFF4',
    paddingBottom: 20,
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 10,
    padding: 7,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export {CopiesTable};
