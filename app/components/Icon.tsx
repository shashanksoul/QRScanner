import React, { ComponentType } from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewProps,View } from 'react-native';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface IconProps  {
  name: string,
  size?: number,
  color?: string,
  onPress?: TouchableOpacityProps['onPress'],
  containerStyle?: TouchableOpacityProps['style'],
  iconStyle?: ViewProps['style'],

}

const Icon: React.FC<IconProps> = ({size = 25,color = 'white', name, onPress,containerStyle,iconStyle}) => {



    const isPressable = !!onPress;
    const Wrapper = (isPressable ? TouchableOpacity : View) as ComponentType<TouchableOpacityProps| ViewProps>;


    return(
        <Wrapper style={containerStyle} onPress={onPress}>
            <MaterialIcons name={name} style={iconStyle} color={color} size={size} />
        </Wrapper>

    );
};



export default Icon;
