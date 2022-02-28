import * as React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {GeneralStatusBar, ScreenContainer} from '@wrappers';
import {ActionItems, Card, ProgressBar} from '@custom-components';
//import {ServiceCall} from '@utils';
import {Api} from '@config';
import {useFocusEffect} from '@react-navigation/native';
import {Icons} from '@assets';
import styles from './DebitCard.Styles';
const actionData = require('../../ServerFiles/actionData.json');
const DebitCard: React.FC = ({navigation}: any) => {
  useFocusEffect(
    React.useCallback(() => {
      fetchActionData();
      console.log('useCallback');
    }, []),
  );
  const onSuccessActionDataFetch = data => {
    console.log(data);
  };
  const onFailureAPI = data => {
    console.log(data);
  };
  const onPromiseFailure = data => {
    console.log(data);
  };
  const onOffline = data => {
    console.log(data);
  };
  const fetchActionData = async () => {
    let Service = {
      apiUrl: Api.actionData,
      methodType: 'GET',
      headerData: {'Content-Type': 'application/json'},
      onSuccessCall: onSuccessActionDataFetch,
      onFailureAPI: onFailureAPI,
      onPromiseFailure: onPromiseFailure,
      onOffline: onOffline,
    };
    console.log(Service);
    //await ServiceCall(Service);
  };
  return (
    <GeneralStatusBar>
      <ScreenContainer>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Debit Card</Text>
            <Image style={styles.headerLogo} source={Icons.logo} />
          </View>
          <View style={styles.headerInfoBlock}>
            <Text style={styles.headerInfoText}>Available balance</Text>
            <View style={styles.headerInfo}>
              <View style={styles.headerCurrencyType}>
                <Text style={styles.headerCurrencyTypeText}>S$</Text>
              </View>
              <Text style={styles.headerCurrencyText}>3,000</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Card />
          <ScrollView style={styles.scrollView}>
            <ProgressBar />
            <ActionItems
              actionData={actionData.actionData}
              navigation={navigation}
            />
          </ScrollView>
        </View>
      </ScreenContainer>
    </GeneralStatusBar>
  );
};
export default DebitCard;
