import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import tw from "twrnc";
import { colors } from "../themes";
import BackButton from "../components/BackBotton";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../constants";

const AddExpenseScreen = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  function handleExpense() {
    if (title && amount && category) {
      navigation.goBack()
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
              Add Expense
            </Text>
          </View>

          <View style={tw`flex-row justify-center my-3 mt-5`}>
            <Image
              style={tw`w-76 h-76`}
              source={require("../assets/images/expenseBanner.png")}
            />
          </View>

          <View style={tw`mx-2`}>
            <Text style={tw`${colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput value={title} onChangeText={value => setTitle(value)} style={tw`p-4 rounded-full bg-white mb-3`} />
            <Text style={tw`${colors.heading} text-lg font-bold`}>
              How much?
            </Text>
            <TextInput value={amount} onChangeText={value => setAmount(value)} style={tw`p-4 rounded-full bg-white mb-3`} />
          </View>
        </View>


        <View style={tw`mx-2 space-x-2`}>
              <Text style={tw`text-lg font-bold`}>Category</Text>
              <View style={tw`flex-row flex-wrap items-center`}>
                {
                  categories.map(cat=>{
                    let bgColor = 'bg-white';
                    if(cat.value==category) bgColor = 'bg-green-200'
                    return (
                      <TouchableOpacity onPress={()=> setCategory(cat.value)} key={cat.value} 
                      style={ tw`rounded-full ${bgColor} px-4 p-3 mb-2 mr-2`}>
                        <Text>{cat.title}</Text>
                      </TouchableOpacity>
                    )
                  })

                }
              </View>
              </View>

        <View>
          <TouchableOpacity onPress={handleExpense}
            style={tw`rounded-full p-3 my-6 shadow-sm bg-[#50C878] mx-2`}
          >
            <Text style={tw`text-center text-white text-lg font-bold`}>
              Add expenses
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddExpenseScreen;
