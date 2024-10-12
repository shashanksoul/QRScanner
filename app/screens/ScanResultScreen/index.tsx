import {
  DrawerActions,
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import RNFS from 'react-native-fs';
import {StackParamList} from '../../navigators/StackNavigator';
import {Icon} from '../../components';
import {toggleDrawer} from '../../navigators';

const ScanResultScreen = () => {
  const {params} = useRoute<RouteProp<StackParamList, 'Result'>>();
  const {code = {value: 100}, image = ''} = params ?? {};
  const [imageData, setImageData] = React.useState<string>();
  useEffect(() => {
    RNFS.readFile(image, 'base64')
      .then(res => {
        setImageData(res);
      })
      .catch(er => console.log(er));
  }, [image]);
  //data:image/jpg;base64,${imageData}

  return (
    <View>
      <View>
        <Icon
          name="menu"
          onPress={() => {
            toggleDrawer();
          }}
        />
      </View>
    </View>
  );
};

export default ScanResultScreen;
