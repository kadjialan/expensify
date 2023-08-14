import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import tw from "twrnc";
  import { useNavigation } from "@react-navigation/native";
  
  
  const LandingScreen = () => {
    const navigation = useNavigation();
  
    return (
      <ScrollView contentContainerStyle={tw`bg-white h-full flex justify-center`}>
        <View style={tw`flex mx-auto`}>
          <View style={tw`flex items-center gap-4`}>
            <Image
              source={require("../assets/images/welcome.gif")}
              style={tw`h-60 w-60`}
            />
          </View>

          <Text style={tw`text-center text-xl font-bold`}>Expensify</Text>

  
          <View>
            <TouchableOpacity
            onPress={() => navigation.navigate('login')}
              style={tw`rounded-full p-1 my-6 shadow-sm bg-[#50C878] mx-2`}
            >
              <Text style={tw`text-center text-white text-lg font-bold`}>
                Sign In
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity
            onPress={() => navigation.navigate('signUp')}
              style={tw`rounded-full p-1  shadow-sm bg-[#50C878] mx-2`}
            >
              <Text style={tw`text-center text-white text-lg font-bold`}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default LandingScreen;
  