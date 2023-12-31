import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AddTripScreen from "../screens/AddTripScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import TripExpenseScreens from "../screens/TripExpenseScreens";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">

      <Stack.Screen
          options={{ headerShown: false }}
          name="welcome"
          component={WelcomeScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="AddTrip"
          component={AddTripScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="AddExpense"
          component={AddExpenseScreen}
        />


<Stack.Screen
          options={{ headerShown: false }}
          name="TripExpenses"
          component={TripExpenseScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
