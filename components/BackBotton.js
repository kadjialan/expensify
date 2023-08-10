import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import tw from "twrnc";
import { colors } from "../themes";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`h-8 w-8 rounded-full bg-white`}>
        <ChevronLeftIcon size={30} color={colors.button} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
