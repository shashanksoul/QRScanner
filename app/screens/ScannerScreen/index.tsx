import React from 'react';
import { StyleSheet ,View, Text} from 'react-native';

import {Camera, CameraPosition, useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import styles from './styles';
import { Icon } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScannerScreen: React.FC = () => {
    const insects = useSafeAreaInsets();
    const navigation = useNavigation<any>();
    const [cameraType, setCameraType] = React.useState<CameraPosition>('back');
    const [torchIcon, setTorchIcon] = React.useState<'flash-off'| 'flash-on'>('flash-off');

    const device = useCameraDevice(cameraType);


    const _onFlipCameraPress = () => {
         setCameraType(currentType => currentType === 'back' ? 'front' : 'back');
    };

    const _onHamburgerPress = () => {
    navigation.toggleDrawer();
    };

    const _onTorchIcronPress = () => {
         setTorchIcon(cI=> cI === 'flash-on' ? 'flash-off' : 'flash-on');
    };


    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
          console.log(codes[0].value);
        },
      });

    if(device === undefined) {
        return(
            <View>
                <Text>
                    No Device
                </Text>
            </View>
        );
    }

    return(
     <>
        <Camera
         isActive
         torch={torchIcon === 'flash-on' ? 'on' : 'off'}
         device={device}
         style={StyleSheet.absoluteFill}
         codeScanner={codeScanner}
        />
          <View style={[styles.container,{paddingTop: insects.top,bottom: insects.bottom}]}>
          <View style={styles.headerContainer}>
            <Icon name="menu" containerStyle={styles.hamburgerIcon} onPress={_onHamburgerPress}/>
           <View style={styles.iconContainer}>
           <Icon name="image"  />
           {device.hasTorch && <Icon name={torchIcon} onPress={_onTorchIcronPress}/>}
           <Icon name="flip-camera-android"  onPress={()=> _onFlipCameraPress()} />
        </View>

           </View>
     </View>
     </>
    );
};

export default ScannerScreen;
