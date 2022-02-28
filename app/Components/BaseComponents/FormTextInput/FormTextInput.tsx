import * as React from 'react';
import {useRef} from 'react';
import {Icons} from '@assets';
import {ThemeConfig} from '@theme';
import {
  Image,
  NativeSyntheticEvent,
  Pressable,
  Text,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const styles = require('./FormTextInput.Styles');

const FormTextInput = <Props, State>({
  inputContainerStyle,
  inputStyle,
  leftIcon,
  rightIcon,
  withBorder,
  iconStyle,
  isEnabled,
  placeholderTextColor,
  rightIconStyle,
  onLeftButtonPress,
  selectionColor,
  title,
  titleStyle,
  onRightButtonPress,
  onFocus,
  onBlur,
  ...otherProps
}: any) => {
  const inputRef = useRef<TextInput>(null);
  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onBlur) {
      onBlur(e);
    }
  };
  const renderInput = ({
    inputStyle,
    placeholderTextColor,
    ...otherProps
  }: any) => {
    return (
      <TextInput
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isEditable={isEnabled}
        placeholderTextColor={
          placeholderTextColor ?? Colors.placeholderTextColor
        }
        selectionColor={selectionColor ?? Colors.textSelection}
        style={[styles.inputStyle, inputStyle]}
        {...otherProps}
      />
    );
  };
  const renderRightIcon = ({
    rightIcon,
    rightIconContainerStyle,
    iconStyle,
    rightIconStyle,
    ...otherProps
  }: any) => {
    return (
      <Pressable
        android_ripple={ThemeConfig.rippelConfig}
        onPress={data => {
          onRightButtonPress(data);
        }}
        style={[styles.iconContainerStyle, rightIconContainerStyle]}>
        <Image
          source={Icons.keyboard}
          style={[styles.icons, styles.rightIcon, iconStyle, rightIconStyle]}
        />
      </Pressable>
    );
  };
  const renderLeftIcon = ({
    leftIcon,
    leftIconContainerStyle,
    iconStyle,
    leftIconStyle,
    ...otherProps
  }: any) => {
    return (
      <Pressable
        android_ripple={ThemeConfig.rippelConfig}
        onPress={data => {
          onLeftButtonPress(data);
        }}
        style={[styles.iconContainerStyle, leftIconContainerStyle]}>
        <Image
          source={Icons.redCancel}
          style={[styles.icons, styles.leftIcon, iconStyle, leftIconStyle]}
        />
      </Pressable>
    );
  };
  const renderTitle = ({...otherProps}: any) => {
    console.log(title);
    return <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>;
  };
  return (
    <>
      {title && renderTitle({...otherProps})}
      <View
        style={[
          styles.inputContainerStyle,
          inputContainerStyle,
          withBorder ?? styles.withBorder,
        ]}>
        {leftIcon && renderLeftIcon({...otherProps})}
        {renderInput({...otherProps})}
        {rightIcon && renderRightIcon({...otherProps})}
      </View>
    </>
  );
};
FormTextInput.defaultProps = {
  onLeftButtonPress: () => {
    console.log('onLeftButtonPress not defined as callback');
  },
  onRightButtonPress: () => {
    console.log('onRightButtonPress not defined as callback');
  },
  onFocus: () => {
    console.log('onFocus not defined as callback');
  },
  onBlur: () => {
    console.log('onBlur not defined as callback');
  },
};
export default FormTextInput;
