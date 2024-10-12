import { createNavigationContainerRef, DrawerActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const toggleDrawer = () => {
    console.log(navigationRef.isReady());
    if(navigationRef.isReady()){
        navigationRef.dispatch(DrawerActions.openDrawer());
    }
};
