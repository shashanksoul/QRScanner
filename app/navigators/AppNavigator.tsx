import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NoPermissionScreen} from '../screens';

import {useCameraPermission} from 'react-native-vision-camera';
import {navigationRef} from './utils';
import DrawerNavigator from './DrawerNavigator';

export const AppNavigator = () => {
  const {hasPermission, requestPermission} = useCameraPermission();

  React.useLayoutEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  return (
    <NavigationContainer ref={navigationRef}>
      {hasPermission ? <DrawerNavigator /> : <NoPermissionScreen />}
    </NavigationContainer>
  );
};
