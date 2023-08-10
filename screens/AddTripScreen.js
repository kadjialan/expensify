import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import tw from "twrnc";
import { colors } from "../themes";
import BackButton from "../components/BackBotton";
import { useNavigation } from "@react-navigation/native";

const AddTripScreen = () => {
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");

  const navigation = useNavigation();

  function handleAddTrip() {
    if (place && country) {
      navigation.navigate("Home");
    } else {
      
    }
  }
  return (
    <ScreenWrapper>
      <View style={tw`flex justify-between mx-4 h-100vh`}>
        <View>
          <View style={tw`relative mt-1`}>
            <View style={tw`absolute top-0 left-0`}>
              <BackButton />
            </View>
            <Text style={tw`${colors.heading} font-bold text-xl text-center`}>
              Add Trip
            </Text>
          </View>

          <View style={tw`flex-row justify-center my-3 mt-5`}>
            <Image
              style={tw`w-76 h-76`}
              source={require("../assets/images/4.png")}
            />
          </View>

          <View style={tw`mx-2`}>
            <Text style={tw`${colors.heading} text-lg font-bold`}>
              Where on Earth
            </Text>
            <TextInput value={place} onChangeText={value => setPlace(value)} style={tw`p-4 rounded-full bg-white mb-3`} />
            <Text style={tw`${colors.heading} text-lg font-bold`}>
              Which Country
            </Text>
            <TextInput value={country} onChangeText={value => setCountry(value)} style={tw`p-4 rounded-full bg-white mb-3`} />
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={handleAddTrip}
            style={tw`rounded-full p-3 my-6 shadow-sm bg-[#50C878] mx-2`}
          >
            <Text style={tw`text-center text-white text-lg font-bold`}>
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddTripScreen;
