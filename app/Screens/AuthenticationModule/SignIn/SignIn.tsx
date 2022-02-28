import * as React from 'react';
import {GeneralStatusBar, ScreenContainer} from '@wrappers';
import {FormTextInput} from '@base-components';
import {Icons} from '../../../Assets';

const SignIn: React.FC = ({navigation}: any) => {
  return (
    <GeneralStatusBar>
      <ScreenContainer>
        <FormTextInput
          title={'Username:'}
          placeholder={'Username:'}
          leftIcon={Icons.card}
          rightIcon={Icons.eyeShow}
          onLeftButtonPress={() => {
            console.log('onLeftButtonPress');
          }}
          onRightButtonPress={() => {
            console.log('onRightButtonPress');
          }}
          returnKeyType="next"
          inputContainerStyle={{backgroundColor: '#fff'}}
          inputStyle={{color: '#000'}}
          secureTextEntry={false}
        />
        <FormTextInput
          title={'Email:'}
          placeholder={'Email:'}
          leftIcon={Icons.logo}
          rightIcon={Icons.eyeHide}
          onLeftButtonPress={() => {
            console.log('aweofhh');
          }}
          onRightButtonPress={() => {
            console.log('onRightButtonPress');
          }}
          returnKeyType="done"
          keyboardType="email-address"
          inputContainerStyle={{backgroundColor: '#fff'}}
          inputStyle={{color: '#000'}}
          secureTextEntry={false}
        />
      </ScreenContainer>
    </GeneralStatusBar>
  );
};
export default SignIn;
