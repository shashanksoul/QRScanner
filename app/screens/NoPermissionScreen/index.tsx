import React from 'react';
import {Button, Linking, Text, View} from 'react-native';
import styles from './styles';

const NoPermissionScreen = () => {


  const _openBtnPress = React.useCallback(async () => {
    Linking.openSettings();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
       This application cannot run because it does not have the camera permission required for scanning. Please enable the permission.
      </Text>
      <Button title="Open Settings" onPress={_openBtnPress} />
    </View>
  );
};

export default NoPermissionScreen;
