import React from 'react';
import { StyleSheet ,View, Text} from 'react-native';

import {Camera, CameraPosition, useCameraDevice, useCodeScanner} from 'react-native-vision-camera';
import Slider from '@react-native-community/slider';
import styles from './styles';
import { Icon } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScannerScreen: React.FC = () => {
    const insects = useSafeAreaInsets();
    const navigation = useNavigation<any>();
    const [cameraType, setCameraType] = React.useState<CameraPosition>('back');
    const [torchIcon, setTorchIcon] = React.useState<'flash-off'| 'flash-on'>('flash-off');
    const [zoomValue, setZoomValue] = React.useState(1);

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


    const _onZoomInPress = () => {
    if(device && zoomValue >= device?.maxZoom) {return;}
     setZoomValue(zoomValue + 1);
    };

    const _onZoomOutPress = () => {
    if(device && zoomValue <= device?.minZoom) {return;}
    setZoomValue(zoomValue - 1);
    };

    const _onSlideValueChange = (value: number) => {
       setZoomValue(value);
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
         zoom={zoomValue}
         style={StyleSheet.absoluteFill}
         codeScanner={codeScanner}
        />
          <View style={[styles.container,{paddingTop: insects.top,bottom: insects.bottom}]}>
          <View style={styles.headerContainer}>
            <Icon name="menu" containerStyle={styles.hamburgerIcon} onPress={_onHamburgerPress}/>
           <View style={styles.iconContainer}>
           <Icon name="image"  />
           {device.hasTorch && <Icon name={torchIcon} onPress={_onTorchIcronPress}/>}
           <Icon name="flip-camera-android"  onPress={_onFlipCameraPress} />
            </View>
           </View>
             <View style={styles.footerContainer}>
             <Icon name="zoom-out" onPress={_onZoomOutPress}  />
             <Slider
               style={styles.slider}
               minimumValue={1}
               maximumValue={10}
               value={zoomValue}
               thumbTintColor="#FFFFFF"
               minimumTrackTintColor="#FFFFFF"
               maximumTrackTintColor="#FFFFFF"
               onValueChange={_onSlideValueChange}
              />
              <Icon name="zoom-in"  onPress={_onZoomInPress} />

          </View>
     </View>
     </>
    );
};

export default ScannerScreen;
