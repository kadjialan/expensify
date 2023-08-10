//import liraries
import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc'

const EmptyList = ({message}) => {
    return (
        <View style={tw `flex justify-center items-center my-5 space-y-3`}>
            <Image style={tw`w-36 h-36`} source={require('../assets/images/empty.png')}/>
            <Text style={tw `font-bold text-gray-400`}>{message || 'data not found'}</Text>
        </View>
    );
};


export default EmptyList;
