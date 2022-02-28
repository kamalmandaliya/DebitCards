import * as React from 'react';
import {Image, Text, TouchableOpacity, Switch, View} from 'react-native';
import {Icons} from '@assets';
import {Colors} from '@theme';
import styles from './ActionItems.Styles';

const ActionItems = <Props, State>({
  actionData,
  navigation,
  ...otherProps
}: any) => {
  return (
    <>
      {actionData.map((item, i) => (
        <View key={i} style={styles.rowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('CardAction')}>
            <Image style={styles.rowIcon} source={Icons[item.icon]} />
          </TouchableOpacity>
          <View style={styles.rowDetailsContainer}>
            <Text style={styles.rowTitleText}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.rowDescriptionText}>
              {item.description}
            </Text>
          </View>
          {item.isAction && (
            <Switch
              style={styles.switch}
              trackColor={{false: Colors.white, true: Colors.primary}}
              thumbColor={Colors.white}
              ios_backgroundColor={Colors.primary}
              onValueChange={console.log('switch triggered')}
              value={true}
            />
          )}
        </View>
      ))}
    </>
  );
};
export default ActionItems;
