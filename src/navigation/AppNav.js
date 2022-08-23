import {View, Text, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from '../context/AuthContext';
const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <>
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <>{userToken !== null ? <AppStack /> : <AuthStack />}</>
        )}
      </>
    </NavigationContainer>
  );
};

export default AppNav;
