import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'absolute',
        left: 0,
        right:0,
        bottom:0,
        top:0,
    },
    headerContainer: {flexDirection:'row', padding: 10, justifyContent:'center', width:'100%'},
    footerContainer: {flexDirection:'row', padding: 10, justifyContent:'center', width:'100%', alignItems:'center', position:'absolute',bottom:100},
    iconContainer:{flexDirection:'row', width:'50%', justifyContent:'space-evenly'},
    hamburgerIcon: {position:'absolute',left:0,padding: 10},
    slider: {width: '70%', height: 40},
});

export default styles;
