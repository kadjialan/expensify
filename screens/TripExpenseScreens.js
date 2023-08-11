import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../themes";
import EmptyList from "../components/EmptyList";
import { useNavigation } from "@react-navigation/native";
import ExpenseCard from "../components/ExpenseCard";
import BackButton from "../components/BackBotton";

const items = [
  {
    id: 1,
    title: "ate sandwich",
    amount: 4,
    category: 'food',
  },
  {
    id: 2,
    title: "ate sandwich",
    amount: 4,
    category: 'shopping',
  },
  {
    id: 3,
    title: "ate sandwich",
    amount: 4,
    category: 'entertainment',
  },
  {
    id: 4,
    title: "ate sandwich",
    amount: 4,
    category: 'food',
  }
];

export default function TripExpenseScreens(props) {
    console.log(props)
    const {id,place, country} = props.route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper style={tw`flex-1`}>
      <View style={tw`px-4`}>
        <View style={tw`relative mt-1`}>
          <View style={tw`absolute top-2 left-0`}>
            <BackButton />
          </View>

          <View>
          <Text style={tw`${colors.heading} font-bold text-xl text-center`}>
            {place}
          </Text>
          <Text style={tw`${colors.heading} text-xs text-center`}>
            {country}
          </Text>

          </View>

        </View>
        <View
          style={tw`flex-row justify-center items-center rounded-xl mb-4`}
        >
          <Image
            source={require("../assets/images/7.png")}
            style={tw`w-80 h-80`}
          />
        </View>

        <View /* style={tw`px-4`} */>
          <View style={tw`flex-row justify-between items-center mb-3`}>
            <Text style={tw`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              style={tw`p-2 px-3 bg-white border border-gray-200 rounded-full`}
            >
              <Text
                onPress={() => navigation.navigate("AddExpense")}
                style={tw`${colors.heading}`}
              >
                Add Expenses
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 430 }}>
            <FlatList
              keyExtractor={(items) => items.id}
              data={items}
              ListEmptyComponent={
                <EmptyList message={"you haven't recorded any expenses yet"} />
              }
              style={tw`mx-1`}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                    <ExpenseCard item={item}/>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
