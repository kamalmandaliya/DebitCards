import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Icons} from '@assets';
import styles from './Card.Styles';

const Card = <Props, State>({...otherProps}: any) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity style={styles.cardToggleBox}>
        <Image style={styles.eye} source={Icons.eyeHide} />
        <Text style={styles.toggleText}>Hide card number</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Image style={styles.aspireLogo} source={Icons.aspireLogo} />
        <View style={styles.cardDetailsContainer}>
          <Text style={styles.cardHolderName}>Mark Henry</Text>
          <View style={styles.cardNumberContainer}>
            <Text style={styles.cardNumberBlock}>5647</Text>
            <Text style={styles.cardNumberBlock}>5647</Text>
            <Text style={styles.cardNumberBlock}>5647</Text>
            <Text style={styles.cardNumberBlock}>5647</Text>
          </View>
          <View style={styles.cardInfoBlock}>
            <Text style={styles.cardInfoText}>
              Thru: <Text>12/20</Text>
            </Text>
            <Text style={styles.cardInfoText}>
              CVV: <Text>456</Text>
            </Text>
          </View>
        </View>
        <Image style={styles.visaLogo} source={Icons.visaLogo} />
      </View>
    </View>
  );
};
export default Card;
