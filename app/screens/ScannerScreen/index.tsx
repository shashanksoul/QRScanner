import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {
  Camera,
  CameraPosition,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import Slider from '@react-native-community/slider';
import styles from './styles';
import {Icon} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigationRef, toggleDrawer} from '../../navigators';

const ScannerScreen: React.FC = () => {
  const insects = useSafeAreaInsets();
  const cameraRef = React.useRef<Camera | null>();
  const [cameraType, setCameraType] = React.useState<CameraPosition>('back');
  const isScanning = React.useRef(true);
  const [torchIcon, setTorchIcon] = React.useState<'flash-off' | 'flash-on'>(
    'flash-off',
  );
  const [zoomValue, setZoomValue] = React.useState(1);

  const device = useCameraDevice(cameraType);

  const _onFlipCameraPress = () => {
    setCameraType(currentType => (currentType === 'back' ? 'front' : 'back'));
  };

  const _onHamburgerPress = () => {
    toggleDrawer();
  };

  const _onTorchIcronPress = () => {
    setTorchIcon(cI => (cI === 'flash-on' ? 'flash-off' : 'flash-on'));
  };

  const _onZoomInPress = () => {
    if (device && zoomValue >= device?.maxZoom) {
      return;
    }
    setZoomValue(zoomValue + 1);
  };

  const _onZoomOutPress = () => {
    if (device && zoomValue <= device?.minZoom) {
      return;
    }
    setZoomValue(zoomValue - 1);
  };

  const _onSlideValueChange = (value: number) => {
    setZoomValue(value);
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: async codes => {
      if (isScanning.current) {
        isScanning.current = false;
        const photo = await cameraRef.current?.takePhoto();
        if (photo) {
          isScanning.current = true;
          setTorchIcon('flash-off');
          navigationRef.navigate('ScanStack', {
            screen: 'Result',
            params: {
              code: codes[0],
              image: photo.path,
            },
          });
        }
      }
    },
  });

  if (device === undefined) {
    return (
      <View>
        <Text>No Device</Text>
      </View>
    );
  }

  return (
    <>
      <Camera
        isActive
        ref={cameraRef}
        torch={torchIcon === 'flash-on' ? 'on' : 'off'}
        device={device}
        zoom={zoomValue}
        photo
        style={StyleSheet.absoluteFill}
        codeScanner={codeScanner}
      />
      <View
        style={[
          styles.container,
          {paddingTop: insects.top, bottom: insects.bottom},
        ]}>
        <View style={styles.headerContainer}>
          <Icon
            name="menu"
            containerStyle={styles.hamburgerIcon}
            onPress={_onHamburgerPress}
          />
          <View style={styles.iconContainer}>
            <Icon name="image" />
            {device.hasTorch && (
              <Icon name={torchIcon} onPress={_onTorchIcronPress} />
            )}
            <Icon name="flip-camera-android" onPress={_onFlipCameraPress} />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Icon name="zoom-out" onPress={_onZoomOutPress} />
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
          <Icon name="zoom-in" onPress={_onZoomInPress} />
        </View>
      </View>
    </>
  );
};

export default ScannerScreen;
