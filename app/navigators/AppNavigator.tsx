import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ScannerScreen } from '../screens';



const Drawer = createDrawerNavigator();

const AppDrawer = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Scanner" component={ScannerScreen} options={{headerShown: false}} />
        </Drawer.Navigator>
    );
};


export const AppNavigator = () =>{

    return(
        <NavigationContainer>
         <AppDrawer/>
        </NavigationContainer>
    );

};
