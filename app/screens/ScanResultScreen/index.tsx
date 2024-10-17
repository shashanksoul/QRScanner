import {
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Linking, Share, Text, View} from 'react-native';
import RNFS from 'react-native-fs';
import {StackParamList} from '../../navigators/StackNavigator';
import {CodeDetails, Header, Options} from '../../components';
import {toggleDrawer} from '../../navigators';
import Clipboard from '@react-native-clipboard/clipboard';

const ScanResultScreen = () => {
  const {params} = useRoute<RouteProp<StackParamList, 'Result'>>();
  const {code, image = ''} = params ?? {};
  const [imageData, setImageData] = React.useState<string>();
  useEffect(() => {
    RNFS.readFile(image, 'base64')
      .then(res => {
        setImageData(res);
      })
      .catch(er => console.log(er));
  }, [image]);
  //data:image/jpg;base64,${imageData}

  console.log('code', code);

  const onOptionsPress = (id: string) => {
    if (code.value) {
      if (id === 'search') {
        const url = `https://www.google.com/search?q=${encodeURIComponent(
          code.value ?? '',
        )}`;
        Linking.openURL(url);
      }

      if (id === 'share') {
        Share.share({
          message: code.value,
        });
      }

      if (id === 'copy') {
        Clipboard.setString(code.value);
      }
    }
  };

  return (
    <View>
      <Header
        title="Scan"
        rightIcon="more-vert"
        leftIcon="menu"
        onLeftIconPress={toggleDrawer}
        onRightIconPress={() => {}}
      />
      <CodeDetails code={code} />
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          marginVertical: 15,
          marginHorizontal: 5,
        }}>
        {code.value}
      </Text>
      <Options onPress={onOptionsPress} />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          style={{height: 200, width: 200}}
          source={{uri: `data:image/jpg;base64,${imageData}`}}
        />
      </View>
    </View>
  );
};

export default ScanResultScreen;
