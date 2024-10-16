import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from './Icon';


type OptionsProps = {
    onPress: (id: string) => void;
}

const Options: React.FC<OptionsProps> = ({onPress}) => {

    return (
      <View style={styles.continer}>
        <Icon
          color="#1e90ff"
          size={40}
          name="search"
          onPress={() => onPress('search')}
        />
        <Icon
          color="#1e90ff"
          size={40}
          name="share"
          onPress={() => onPress('share')}
        />
        <Icon
          color="#1e90ff"
          size={40}
          name="content-copy"
          onPress={() => onPress('copy')}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    padding: 10,
    justifyContent:'space-evenly',
    alignItems:'center',
  },
});


export default Options;
