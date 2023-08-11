import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../themes";
import randomImage from "../assets/images/random";
import EmptyList from "../components/EmptyList";
import { useNavigation } from "@react-navigation/native";

const items = [
  {
    id: 1,
    place: "mvan",
    country: "cameroun",
  },
  {
    id: 2,
    place: "paris",
    country: "france",
  },
  {
    id: 3,
    place: "london",
    country: "england",
  },
  {
    id: 4,
    place: "rome",
    country: "italy",
  },
  {
    id: 5,
    place: "rome",
    country: "italy",
  },
  {
    id: 6,
    place: "rome",
    country: "italy",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <ScreenWrapper style={tw`flex-1`}>
      <View style={tw`flex-row justify-between items-center p-4`}>
        <Text style={tw`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          style={tw`p-2 px-3 bg-white border border-gray-200 rounded-full`}
        >
          <Text style={tw`${colors.heading}`}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View
        style={tw`flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4`}
      >
        <Image
          source={require("../assets/images/banner.png")}
          style={tw`w-60 h-60`}
        />
      </View>

      <View style={tw`px-4`}>
        <View style={tw`flex-row justify-between items-center mb-3`}>
          <Text style={tw`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            style={tw`p-2 px-3 bg-white border border-gray-200 rounded-full`}
          >
            <Text onPress={() => navigation.navigate('AddTrip')  } style={tw`${colors.heading}`}>Add Trip</Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 430}}>
          <FlatList
            keyExtractor={(items) => items.id}
            data={items}
            numColumns={2}
            ListEmptyComponent={<EmptyList message={"you haven't recorded any trip yet"}/>}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            style={tw`mx-1`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('TripExpenses' ,{...item})}
                  style={tw`bg-white p-3 rounded-2xl mb-3 shadow-sm`}
                >
                  <View>
                    <Image
                      source={randomImage()}
                      style={tw`w-36 h-36 mb-2`}
                    />
                    <Text style={tw`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text style={tw`${colors.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
