import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from '../components';
import {ScannerScreen} from '../screens';
import {ScanStackNavigator, StackParamList} from './StackNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type DrawerParamList = {
  ScanStack: NavigatorScreenParams<StackParamList>;
  'Scan Image': undefined;
  Favorites: undefined;
  History: undefined;
  'My QR': undefined;
  'Create QR': undefined;
  Settings: undefined;
  Share: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const drawerIcon = (
  name: string,
  color: string | undefined,
  size: number | undefined,
) => <Icon name={name} color={color} size={size} />;

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ScanStack"
        component={ScanStackNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('fullscreen', color, size),
        }}
      />
      <Drawer.Screen
        name="Scan Image"
        component={ScannerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('image', color, size),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={ScannerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('grade', color, size),
        }}
      />
      <Drawer.Screen
        name="History"
        component={ScannerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('history', color, size),
        }}
      />
      <Drawer.Screen
        name="My QR"
        component={ScannerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('account-box', color, size),
        }}
      />
      <Drawer.Screen
        name="Create QR"
        component={ScannerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('edit', color, size),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={ScannerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('settings', color, size),
        }}
      />
      <Drawer.Screen
        name="Share"
        component={ScannerScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color, size}) => drawerIcon('share', color, size),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
