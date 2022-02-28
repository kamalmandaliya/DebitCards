import * as React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './AmountButtons.Styles';

const AmountButtons = <Props, State>({amountList, ...otherProps}: any) => {
  return (
    <>
      <View style={styles.amountButtonBlock}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={amountList}
          renderItem={({item, index}) => {
            console.log(index);
            return (
              <TouchableOpacity style={styles.suggestionButton}>
                <Text style={styles.suggestionButtonText}>{item.amount}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};
export default AmountButtons;
