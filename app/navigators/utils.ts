import { createNavigationContainerRef, DrawerActions } from '@react-navigation/native';
import { DrawerParamList } from './DrawerNavigator';

export const navigationRef = createNavigationContainerRef<DrawerParamList>();

export const toggleDrawer = () => {
    console.log(navigationRef.isReady());
    if(navigationRef.isReady()){
        navigationRef.dispatch(DrawerActions.openDrawer());
    }
};
