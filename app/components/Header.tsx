import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from './Icon';
import {TouchableOpacityProps} from 'react-native-gesture-handler';

type HeaderProps = {
  title: string;
  rightIcon?: string;
  leftIcon?: string;
  onRightIconPress?: TouchableOpacityProps['onPress'];
  onLeftIconPress?: TouchableOpacityProps['onPress'];
};

const Header: React.FC<HeaderProps> = ({
  title,
  rightIcon,
  leftIcon,
  onLeftIconPress,
  onRightIconPress,
}) => {
  return (
    <View style={styles.container}>
      {leftIcon && <Icon name={leftIcon} onPress={onLeftIconPress} />}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && <Icon name={rightIcon} onPress={onRightIconPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#1e90ff',
  },
  title: {fontWeight: '500', fontSize: 18, color: 'white'},
});

export default Header;
