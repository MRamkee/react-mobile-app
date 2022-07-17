import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Cell, Section, TableView} from 'react-native-tableview-simple';

const RecentWarningDetails = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.stageRecentWarnings}>
      <TableView>
        <Section header="RECENT WARNINGS" footer="">
          <Cell
            cellStyle="RightDetail"
            title="Create Policy"
            detail="15th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Snapshot"
            detail="10th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Snapshot"
            detail="10th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Policy"
            detail="15th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Snapshot"
            detail="10th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Policy"
            detail="15th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Snapshot"
            detail="10th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Policy"
            detail="15th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Create Snapshot"
            detail="10th Oct 2020 5:30 PM (Proxy Error)"
          />
          <Cell
            cellStyle="RightDetail"
            title="Restore Snapshot"
            detail="15th Oct 2020 5:30 PM (Proxy Error)"
          />

          <Cell cellStyle="RightDetail" title="" detail="Total - 10" />
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
  stageRecentWarnings: {
    backgroundColor: '#EFEFF4',
    paddingBottom: 20,
    flex: 1,
    height: 200,
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

export {RecentWarningDetails};
