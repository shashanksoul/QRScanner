import React from 'react';
import Icon from './Icon';
import {StyleSheet, Text, View} from 'react-native';
import {Code} from 'react-native-vision-camera';
import dayjs from 'dayjs';

type CodeDetailsProps = {
  code: Code;
};

const getCodeProduct = (code: Code) => {
  if (code.type === 'ean-13') {
    return code.value?.substring(0, 3) === '978' ? 'ISBN' : 'Product';
  }

  return 'Product';
};

const geticonName = (title: string) => {
  switch (title) {
    case 'ISBN':
      return 'book';
    default:
      return 'archive';
  }
};
const CodeDetails: React.FC<CodeDetailsProps> = ({code}) => {
  const currentTime = dayjs().format('D MMM YYYY h:mm a');

  const title = getCodeProduct(code);

  return (
    <View style={styles.container}>
      <Icon name={geticonName(title)} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{`${currentTime},${code.type}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontWeight: '500',
  },
  time: {
    color: 'black',
    fontSize: 13,
  },
});

export default CodeDetails;
