import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {GeneralStatusBar, ScreenContainer} from '@wrappers';
import {Icons} from '@assets';
import {FormTextInput} from '@base-components';
import {AmountButtons} from '@custom-components';
import styles from './CardAction.Styles';
import {Colors} from '@theme';

const amountList = require('../../../ServerFiles/amountList.json');

const CardAction: React.FC = ({navigation}: any) => {
  return (
    <GeneralStatusBar>
      <ScreenContainer>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.headerBackButton}
                source={Icons.backButton}
              />
            </TouchableOpacity>
            <Image style={styles.headerLogo} source={Icons.logo} />
          </View>
          <Text style={styles.headerText}>Spending limit</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.infoBlock}>
            <Image
              style={styles.actionInfoIcon}
              source={Icons.weeklySpendingGeneric}
            />
            <Text style={styles.infoText}>
              Set a weekly debit card spending limit
            </Text>
          </View>
          <View style={styles.limitInputBlock}>
            <View style={styles.currencyType}>
              <Text style={styles.currencyTypeText}>S$</Text>
            </View>
            <FormTextInput
              withBorder={false}
              inputContainerStyle={{borderBottomWidth: 0}}
              inputStyle={{color: Colors.black, fontSize: 24}}
              keyboardType={'number-pad'}
              onLeftButtonPress={() => {
                console.log('onLeftButtonPress');
              }}
              onRightButtonPress={() => {
                console.log('onRightButtonPress');
              }}
            />
          </View>
          <Text style={styles.noteText}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
          <AmountButtons amountList={amountList.amountList} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScreenContainer>
    </GeneralStatusBar>
  );
};
export default CardAction;
